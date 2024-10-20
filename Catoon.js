`GINISISILA CARTOON DL` 

const axios = require('axios');

// Define the command
cmd({
    pattern: "cartoonDL",
    react: "📥",
    alias: ["cartoonDownload", "cartoonSearch"],
    desc: "Search and download cartoons",
    category: "entertainment",
    use: '.cartoonDL <cartoon_name>',
    filename: __filename
}, async (message, match) => {
    const query = match[1] || 'ben10';  // Use provided query or fallback to 'ben10'
    const url = `https://dark-yasiya-api-new.vercel.app/search/ginisisila?text=${query}&page=1`;

    try {
        // Search for cartoons using the API
        const response = await axios.get(url);
        if (response.data && response.data.length > 0) {
            const cartoonData = response.data[0];  // Get the first result (adjust as needed)
            const cartoonTitle = cartoonData.title;
            const downloadUrl = cartoonData.url;  // Adjust based on API response structure

            // Create button section
            const sections = [{
                title: 'Download Cartoon',
                rows: [{
                    title: `Download ${cartoonTitle}`,
                    rowId: `download_${cartoonTitle.replace(/\s/g, '_')}`, // Unique ID for the button
                }]
            }];

            const buttons = [{
                name: 'single_select',
                buttonParamsJson: JSON.stringify({
                    title: 'Tap Here!',
                    sections
                })
            }];

            // Define the footer
            const footer = "Enjoy your cartoons! 🎉";

            // Send message with button and footer
            await message.reply({
                text: `Found cartoon: ${cartoonTitle}. Tap the button below to download!\n\n${footer}`,
                buttons: buttons
            });

            // Handle button click event (pseudo-code, adjust based on your implementation)
            message.on('button_click', async (buttonId) => {
                if (buttonId === `download_${cartoonTitle.replace(/\s/g, '_')}`) {
                    await downloadCartoon(downloadUrl);
                    message.reply("Download started!");
                }
            });
        } else {
            message.reply("No cartoons found for the query.");
        }
    } catch (error) {
        console.error('Error fetching cartoons:', error);
        message.reply('An error occurred while fetching cartoons.');
    }
});

// Placeholder function for downloading cartoon
async function downloadCartoon(url) {
    try {
        console.log(`Downloading cartoon from: ${url}`);
        // Add actual download logic here
        return "Download complete!";
    } catch (error) {
        console.error('Error downloading cartoon:', error);
        throw new Error('Failed to download cartoon.');
    }
}
