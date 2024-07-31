document.getElementById('careerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const interests = Array.from(document.querySelectorAll('#interests input:checked')).map(input => input.value.toLowerCase());
    const skills = Array.from(document.querySelectorAll('#skills input:checked')).map(input => input.value.toLowerCase());
    const recommendations = document.getElementById('recommendations');

    const careerData = {
        'software developer': {
            description: 'Develops and maintains software applications. Requires programming skills and an interest in technology.',
            criteria: ['technology', 'programming']
        },
        'web developer': {
            description: 'Creates websites and web applications. Requires skills in programming and an interest in technology.',
            criteria: ['technology', 'programming']
        },
        'data scientist': {
            description: 'Analyzes complex data to help companies make decisions. Requires analytical skills and an interest in technology.',
            criteria: ['technology', 'analytical']
        },
        'graphic designer': {
            description: 'Designs visual content for print and digital media. Requires creativity and an interest in design.',
            criteria: ['design', 'creativity']
        },
        'ux/ui designer': {
            description: 'Designs user interfaces and experiences for digital products. Requires creativity and an interest in design.',
            criteria: ['design', 'creativity']
        },
        'data analyst': {
            description: 'Interprets data and provides insights to businesses. Requires analytical skills and an interest in numbers.',
            criteria: ['numbers', 'analytical']
        },
        'nurse': {
            description: 'Provides medical care and support to patients. Requires communication skills and an interest in health.',
            criteria: ['health', 'communication']
        },
        'teacher': {
            description: 'Educates students in various subjects. Requires communication skills and an interest in education.',
            criteria: ['education', 'communication']
        },
        'project manager': {
            description: 'Oversees projects from start to finish. Requires management skills and an interest in management.',
            criteria: ['management', 'management']
        }
    };

    let careerRecommendations = [];

    for (const [career, details] of Object.entries(careerData)) {
        if (details.criteria.every(criterion => interests.includes(criterion) || skills.includes(criterion))) {
            careerRecommendations.push({ title: career, description: details.description });
        }
    }

    recommendations.innerHTML = '<h2>Recommended Careers:</h2>';
    if (careerRecommendations.length > 0) {
        careerRecommendations.forEach(career => {
            const item = document.createElement('div');
            item.className = 'recommendation-item';

            const title = document.createElement('div');
            title.className = 'recommendation-title';
            title.innerText = career.title;
            item.appendChild(title);

            const description = document.createElement('div');
            description.className = 'recommendation-description';
            description.innerText = career.description;
            item.appendChild(description);

            recommendations.appendChild(item);
        });
    } else {
        recommendations.innerHTML += '<p>No recommendations based on your inputs.</p>';
    }

    recommendations.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.querySelectorAll('#interests input, #skills input').forEach(input => {
        input.checked = false;
    });
    document.getElementById('recommendations').innerHTML = '';
});
``
