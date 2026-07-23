// api/hook.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { event, station, token, details } = req.body;

    console.log(`Received [${event}] from station: ${station}`);
    console.log('Scan Details:', details);

    // Add your workflow logic here (e.g., sending to a database or API)

    return res.status(200).json({ status: 'success', message: 'Event processed' });
}
