export default async function handler(req, res) {
    // Handle CORS preflight requests
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { event, station, token, details } = req.body;
    
    console.log(`Received [${event}] from station: ${station}`);
    console.log('Scan Details:', JSON.stringify(details, null, 2));

    // Set CORS headers for the actual response
    res.setHeader('Access-Control-Allow-Origin', '*');

    return res.status(200).json({ status: 'success', message: 'Event processed successfully' });
}
