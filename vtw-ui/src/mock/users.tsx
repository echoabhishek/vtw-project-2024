// Mock user data for the leaderboard
export const mockUsers = Array.from({ length: 22 }, (_, i) => ({
    name: `User ${i + 1}`,
    title: `Title ${i + 1}`,
    tokens: Math.floor(Math.random() * 2000) + 500,
    company: `Company ${i + 1}`,
    photoUrl: `https://picsum.photos/seed/${i + 1}/200/200`
}));
