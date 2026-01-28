import { Connection, PublicKey } from "@solana/web3.js";

// Replace with your actual RPC endpoint or use a public one (rate limits apply)
const RPC_ENDPOINT = "https://api.mainnet-beta.solana.com";

interface Holder {
    address: string;
    amount: number;
    rank: number;
}

export async function getTopHolders(tokenMintAddress: string): Promise<Holder[]> {
    try {
        if (!tokenMintAddress || tokenMintAddress.includes("Pump")) {
            // Return mock data if no valid address is provided
            return getMockHolders();
        }

        const connection = new Connection(RPC_ENDPOINT);
        const mint = new PublicKey(tokenMintAddress);

        // This is a simplified fetch. For production with many holders, use an indexer API (Helius, Shyft, etc.)
        // getProgramAccounts is heavy and may fail on public RPCs for large tokens.
        const accounts = await connection.getParsedProgramAccounts(
            new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), // Token Program ID
            {
                filters: [
                    {
                        dataSize: 165, // Limit to Token Account size
                    },
                    {
                        memcmp: {
                            offset: 0,
                            bytes: mint.toBase58(),
                        },
                    },
                ],
            }
        );

        const holders = accounts.map((account) => {
            const parsedData = (account.account.data as any).parsed.info;
            return {
                address: parsedData.owner,
                amount: parsedData.tokenAmount.uiAmount,
            };
        });

        // Sort by amount descending
        holders.sort((a, b) => b.amount - a.amount);

        return holders.slice(0, 10).map((h, i) => ({ ...h, rank: i + 1 }));

    } catch (error) {
        console.error("Failed to fetch holders:", error);
        return getMockHolders();
    }
}

function getMockHolders(): Holder[] {
    return [
        { rank: 1, address: "Hp5...8xR", amount: 42000000 },
        { rank: 2, address: "Dj2...9zQ", amount: 6900000 },
        { rank: 3, address: "Ab3...k2P", amount: 1500000 },
        { rank: 4, address: "Xy9...m4L", amount: 800000 },
        { rank: 5, address: "Qr4...p1N", amount: 500000 },
    ];
}
