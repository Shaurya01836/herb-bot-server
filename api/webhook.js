const express = require('express');
const router = express.Router();

// Route for Dialogflow webhook
router.post('/', (req, res) => {
    try {
        const intentName = req.body.queryResult.intent.displayName;
        const parameters = req.body.queryResult.parameters;

        let responseText = '';

        // Switch case to handle different intents
        switch (intentName) {
            case 'HerbInfo':
                responseText = handleHerbInfo(parameters);
                break;
            case 'HerbBenefits':
                responseText = handleHerbBenefits(parameters);
                break;
            case 'HerbUsage':
                responseText = handleHerbUsage(parameters);
                break;
            case 'HerbCare':
                responseText = handleHerbCare(parameters);
                break;
            case 'HerbMyths':
                responseText = handleHerbMyths(parameters);
                break;
            default:
                responseText = 'I’m not sure how to respond to that.';
                break;
        }

        // Send back the response to Dialogflow
        res.json({
            fulfillmentText: responseText,
        });
    } catch (error) {
        console.error('Error handling webhook request:', error);
        res.json({
            fulfillmentText: 'There was an issue processing your request. Please try again later.',
        });
    }
});

// Handler functions for different intents
function handleHerbInfo(parameters) {
    const herbName = parameters.HerbNames ? parameters.HerbNames[0].toLowerCase() : '';
    let info = '';

    switch (herbName) {
        case 'aloe vera':
            info = 'Aloe Vera is widely known for its soothing and healing properties, particularly for skin burns and wounds.';
            break;
        case 'tulsi':
            info = 'Tulsi, also known as Holy Basil, is a sacred herb in India. It is often used in traditional medicine for its immunity-boosting properties.';
            break;
        case 'mint':
            info = 'Mint is well-known for its refreshing flavor and is used for digestion, respiratory disorders, and skin care.';
            break;
        default:
            info = `I currently don’t have information on ${herbName}. Can you specify another herb?`;
            break;
    }
    return info;
}

function handleHerbBenefits(parameters) {
    const herbName = parameters.HerbNames ? parameters.HerbNames[0].toLowerCase() : '';
    let benefits = '';

    switch (herbName) {
        case 'aloe vera':
            benefits = 'Aloe Vera benefits include aiding digestion, improving skin health, and promoting healing of burns and wounds.';
            break;
        case 'tulsi':
            benefits = 'Tulsi has benefits like boosting immunity, reducing stress, and improving respiratory health.';
            break;
        case 'mint':
            benefits = 'Mint is known to relieve indigestion, improve cold symptoms, and boost mental alertness.';
            break;
        default:
            benefits = 'Please specify which herb you are asking about to get the appropriate benefits information.';
            break;
    }
    return benefits;
}

function handleHerbUsage(parameters) {
    const herbName = parameters.HerbNames ? parameters.HerbNames[0].toLowerCase() : '';
    let usage = '';

    switch (herbName) {
        case 'aloe vera':
            usage = 'Aloe Vera can be used topically for skin care or consumed in the form of juice for digestive health.';
            break;
        case 'tulsi':
            usage = 'Tulsi leaves can be brewed into a tea, taken as a supplement, or used in Ayurvedic remedies for respiratory and immunity support.';
            break;
        case 'mint':
            usage = 'Mint leaves are used in teas, sauces, and salads. It is also consumed to alleviate digestive issues or applied to the skin for a cooling effect.';
            break;
        default:
            usage = 'Please specify which herb you are asking about to get the appropriate usage information.';
            break;
    }
    return usage;
}

function handleHerbCare(parameters) {
    const herbName = parameters.HerbNames ? parameters.HerbNames[0].toLowerCase() : '';
    let careInstructions = '';

    switch (herbName) {
        case 'aloe vera':
            careInstructions = 'Aloe Vera needs minimal care. Ensure it gets plenty of sunlight and water only when the soil is completely dry.';
            break;
        case 'tulsi':
            careInstructions = 'Tulsi grows best in well-drained soil and full sunlight. Water regularly but avoid waterlogging.';
            break;
        case 'mint':
            careInstructions = 'Mint grows well in moist, well-drained soil and partial sunlight. It can be invasive, so consider growing it in pots.';
            break;
        default:
            careInstructions = 'Please specify which herb you are asking about to get the appropriate care instructions.';
            break;
    }
    return careInstructions;
}

function handleHerbMyths(parameters) {
    const herbName = parameters.HerbNames ? parameters.HerbNames[0].toLowerCase() : '';
    let myths = '';

    switch (herbName) {
        case 'aloe vera':
            myths = 'A common myth about Aloe Vera is that it is safe for internal use in large quantities. However, it can cause side effects if consumed excessively.';
            break;
        case 'tulsi':
            myths = 'One myth about Tulsi is that it is only useful for religious purposes, but it actually has potent medicinal uses.';
            break;
        case 'mint':
            myths = 'Some believe that mint can cause infertility, but this has no scientific backing. It is generally safe for consumption.';
            break;
        default:
            myths = 'Please specify which herb you are asking about to get the appropriate myths information.';
            break;
    }
    return myths;
}

module.exports = router; // Export router for Vercel
