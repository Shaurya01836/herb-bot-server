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
        case 'chamomile':
            info = 'Chamomile is commonly used to promote sleep, reduce stress, and soothe digestive discomfort.';
            break;
        case 'ashwagandha':
            info = 'Ashwagandha is an adaptogenic herb used to reduce stress, enhance energy levels, and improve overall well-being.';
            break;
        case 'ginger':
            info = 'Ginger is widely used to aid digestion, reduce nausea, and combat inflammation.';
            break;
        case 'lemongrass':
            info = 'Lemongrass is used for relieving digestive issues, reducing anxiety, and promoting healthy hair and skin.';
            break;
        case 'coriander':
            info = 'Coriander is known for its use in culinary dishes and for aiding digestion, regulating blood sugar levels, and acting as an antibacterial agent.';
            break;
        case 'moringa':
            info = 'Moringa is a nutrient-dense herb packed with antioxidants and used for reducing inflammation, boosting immunity, and enhancing overall health.';
            break;
        case 'oregano':
            info = 'Oregano is rich in antioxidants and has antimicrobial properties. It is used both in cooking and for its health benefits, including supporting the immune system.';
            break;
        case 'thyme':
            info = 'Thyme is known for its antimicrobial properties, supporting respiratory health, and boosting the immune system.';
            break;
        case 'garlic':
            info = 'Garlic is used for boosting the immune system, lowering cholesterol, and having antiviral and antibacterial effects.';
            break;
        case 'neem':
            info = 'Neem is often used for its skin-healing properties, as a natural insect repellent, and for boosting immunity.';
            break;
        case 'lavender':
            info = 'Lavender is commonly used to reduce anxiety, promote relaxation, and improve sleep quality.';
            break;
        case 'fennel':
            info = 'Fennel is known for aiding digestion, reducing bloating, and promoting a healthy respiratory system.';
            break;
        case 'cinnamon':
            info = 'Cinnamon is used to regulate blood sugar levels, improve digestion, and reduce inflammation.';
            break;
        case 'holy basil':
            info = 'Holy basil, or tulsi, is revered in Ayurvedic medicine for boosting immunity, reducing stress, and improving respiratory health.';
            break;
        case 'sage':
            info = 'Sage is used for its antioxidant and anti-inflammatory properties and is also known for improving brain function and memory.';
            break;
        case 'parsley':
            info = 'Parsley is rich in vitamins and antioxidants. It is used to support kidney health, improve digestion, and freshen breath.';
            break;
        case 'cloves':
            info = 'Cloves are used for their antiseptic properties, helping with toothaches, and aiding digestion.';
            break;
        case 'dill':
            info = 'Dill is used to soothe digestive discomfort, reduce inflammation, and promote sleep.';
            break;
        case 'bay leaves':
            info = 'Bay leaves are used in cooking for flavor enhancement and are known to aid digestion and reduce inflammation.';
            break;
        case 'saffron':
            info = 'Saffron is prized for its antioxidant properties, mood-enhancing effects, and potential to improve memory.';
            break;
        case 'rosemary':
            info = 'Rosemary enhances cognitive function, boosts memory, and adds flavor in cooking. It also has anti-inflammatory properties.';
            break;
        case 'mint':
            info = 'Mint is well-known for aiding digestion, improving respiratory function, and promoting mental alertness.';
            break;
        case 'basil':
            info = 'Basil has anti-inflammatory and antioxidant properties, and it is used to support heart health and reduce stress.';
            break;
        case 'aloe vera':
            info = 'Aloe Vera is widely known for its soothing and healing properties, particularly for skin burns and wounds. It can also aid digestion.';
            break;
        case 'tulsi':
            info = 'Tulsi, also known as Holy Basil, is a sacred herb in India. It is often used in traditional medicine for its immunity-boosting properties.';
            break;
        case 'turmeric':
            info = 'Turmeric is well-known for its anti-inflammatory and antioxidant properties. It is used for healing and improving overall health.';
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
        case 'coriander':
            benefits = 'Coriander is great for digestion, controlling blood sugar levels, and offering antibacterial properties.';
            break;
        case 'moringa':
            benefits = 'Moringa is packed with nutrients, antioxidants, and anti-inflammatory compounds that support overall health.';
            break;
        case 'oregano':
            benefits = 'Oregano is rich in antioxidants and has antibacterial properties. It also enhances flavor in cooking.';
            break;
        case 'lemongrass':
            benefits = 'Lemongrass helps promote healthy hair, acts as a natural astringent, and supports digestive health.';
            break;
        case 'holy basil':
            benefits = 'Holy basil is known for its healing properties, including stress relief, respiratory support, and immune-boosting effects.';
            break;
        case 'cinnamon':
            benefits = 'Cinnamon is beneficial for digestion, reducing inflammation, and helping to regulate blood sugar levels.';
            break;
        case 'lavender':
            benefits = 'Lavender helps to reduce stress and anxiety, improve sleep, and is often used in aromatherapy.';
            break;
        case 'thyme':
            benefits = 'Thyme supports the immune system, aids in digestion, and has antimicrobial properties.';
            break;
        case 'ashwagandha':
            benefits = 'Ashwagandha is known for its ability to reduce stress, boost energy levels, and enhance immune function.';
            break;
        case 'chamomile':
            benefits = 'Chamomile improves sleep, helps reduce anxiety, and soothes the digestive system.';
            break;
        case 'garlic':
            benefits = 'Garlic helps in boosting the immune system, reducing cholesterol, and has antibacterial properties.';
            break;
        case 'neem':
            benefits = 'Neem is useful for skin care, blood purification, and improving overall immunity.';
            break;
        case 'ginger':
            benefits = 'Ginger helps with digestion, reducing nausea, and has anti-inflammatory properties.';
            break;
        case 'rosemary':
            benefits = 'Rosemary enhances cognitive function, improves memory, and adds flavor in cooking.';
            break;
        case 'turmeric':
            benefits = 'Turmeric is well-known for its anti-inflammatory and antioxidant properties and is used for healing.';
            break;
        case 'basil':
            benefits = 'Basil helps reduce inflammation, supports heart health, and boosts immunity.';
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
