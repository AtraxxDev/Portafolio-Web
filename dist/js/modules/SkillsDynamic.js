//   <!-- Skills Dinamicas -->
export default function SkillsDynamic(){
    const techStack = [
        { name: 'C#', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/1200px-C_Sharp_Logo_2023.svg.png' },
        { name: '.NET', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_.NET_logo.png' },
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Bootstrap', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Tailwind', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Eleventy', logo: 'https://fred.dev/images/11ty.svg' }
    ];

    const tools = [
        { name: 'Unity', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
        { name: 'VS Studio', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Visual_Studio_Icon_2022.svg/1200px-Visual_Studio_Icon_2022.svg.png' },
        { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Trello', logo: 'https://cdn.worldvectorlogo.com/logos/trello.svg' },
        { name: 'Miro', logo: 'https://store-images.s-microsoft.com/image/apps.59334.da7f283b-9ae8-462d-968c-37937444d8e9.94b0a2b8-1808-4bf5-987d-ab0d9b98780e.05b65b02-4545-49e7-b530-981ac20aa7a2.png' },
        { name: 'Notion', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
    ];

    const container = document.getElementById('skills-container');
    const techBtn = document.getElementById('tech-btn');
    const toolsBtn = document.getElementById('tools-btn');

    function setActiveButton(activeBtn, inactiveBtn) {
        activeBtn.className = `
        cursor-pointer px-6 py-2 rounded-lg font-semibold 
        bg-purple-600 text-white transition
      `;

        inactiveBtn.className = `
        cursor-pointer px-6 py-2 rounded-lg font-semibold 
        bg-transparent text-purple-400 border border-purple-600 transition
      `;
    }

    function renderCards(data) {
        container.innerHTML = '';

        data.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = `
          flex items-center bg-purple-900/30 border border-purple-600 rounded-lg p-4 gap-4 shadow-md 
          hover:scale-105 transition duration-300 
          opacity-0 translate-y-4
        `;

            card.innerHTML = `
          <img src="${item.logo}" alt="${item.name}" class="w-10 h-10 object-contain" />
          <span class="text-lg font-medium">${item.name}</span>
        `;

            container.appendChild(card);

            setTimeout(() => {
                card.classList.remove('opacity-0', 'translate-y-4');
                card.classList.add('opacity-100', 'translate-y-0', 'transition-all');
            }, 100 * index);
        });
    }

    techBtn.addEventListener('click', () => {
        setActiveButton(techBtn, toolsBtn);
        renderCards(techStack);
    });

    toolsBtn.addEventListener('click', () => {
        setActiveButton(toolsBtn, techBtn);
        renderCards(tools);
    });

    // Inicial
    setActiveButton(techBtn, toolsBtn);
    renderCards(techStack);
}