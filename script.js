// Optimized mouse move handler with throttling
let mouseMoveThrottle = false;
document.addEventListener("mousemove", (e) => {
    if (mouseMoveThrottle) return;
    mouseMoveThrottle = true;
    
    requestAnimationFrame(() => {
        document.querySelectorAll(".blob").forEach((blob, i) => {
            blob.style.transform = `translate(${e.clientX * 0.005 * i}px, ${e.clientY * 0.005 * i}px)`;
        });
        mouseMoveThrottle = false;
    });
});

// Optimized profile image 3D tilt effect
const profileImg = document.querySelector('.profile-img');
if (profileImg) {
    let tiltThrottle = false;
    
    profileImg.addEventListener('mousemove', (e) => {
        if (tiltThrottle) return;
        tiltThrottle = true;
        
        requestAnimationFrame(() => {
            const rect = profileImg.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / centerY * -5;
            const rotateY = (x - centerX) / centerX * 5;
            
            profileImg.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            tiltThrottle = false;
        });
    });
    
    profileImg.addEventListener('mouseleave', () => {
        profileImg.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
}

// Skills Section
const skillsData = [
    { id: 1, name: 'React', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { id: 2, name: 'JavaScript', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { id: 3, name: 'TypeScript', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { id: 4, name: 'HTML5', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { id: 5, name: 'CSS3', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { id: 6, name: 'Java', category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { id: 7, name: 'Spring', category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { id: 8, name: 'Node.js', category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { id: 9, name: 'Python', category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { id: 10, name: 'MySQL', category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { id: 11, name: 'Docker', category: 'devops', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { id: 12, name: 'AWS', category: 'devops', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
    { id: 13, name: 'Git', category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { id: 14, name: 'VS Code', category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { id: 15, name: 'GitHub', category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { id: 16, name: 'Figma', category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
];

const skillsGrid = document.getElementById('skillsGrid');
const tabBtns = document.querySelectorAll('.tab-btn');
let activeCategory = 'all';

const renderSkills = (category = 'all') => {
    const filteredSkills = category === 'all' ? skillsData : skillsData.filter(skill => skill.category === category);
    
    skillsGrid.innerHTML = filteredSkills.map(skill => `
        <div class="skill-card" data-category="${skill.category}" data-name="${skill.name}">
            <img src="${skill.icon}" alt="${skill.name}" class="skill-icon">
        </div>
    `).join('');
};

const handleTabClick = (e) => {
    if (!e.target.classList.contains('tab-btn')) return;
    
    tabBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    activeCategory = e.target.dataset.category;
    renderSkills(activeCategory);
};

document.querySelector('.skills-tabs').addEventListener('click', handleTabClick);
renderSkills();

// Project Data
const projectsData = [
    {
        id: 1,
        title: "EchoCart - E-Commerce Platform",
        description: "A full-stack e-commerce platform with modern UI, secure payment integration, and comprehensive admin dashboard. Features product management, user authentication, and order tracking.",
        tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
        images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center"],
        github: "https://github.com/mr-piyushkr/EchoCart.git",
        live: "https://echocart-demo.vercel.app",
        category: "fullstack",
        featured: true
    },
    {
        id: 2,
        title: "Smart Expense Manager",
        description: "An intelligent expense tracking application with AI-powered categorization, budget planning, and financial insights with interactive charts and reports.",
        tech: ["React", "Firebase", "Chart.js", "Material-UI"],
        images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center"],
        github: "https://github.com/mr-piyushkr/Smart-Expense-Manager.git",
        live: "https://smart-expense-manager.netlify.app",
        category: "frontend",
        featured: false
    },
    {
        id: 3,
        title: "WeatherX - Android App",
        description: "A modern weather application for Android with location-based forecasts, interactive maps, and detailed weather analytics with beautiful UI.",
        tech: ["Java", "Android SDK", "OpenWeather API", "Material Design"],
        images: ["https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop&crop=center"],
        github: "https://github.com/mr-piyushkr/WeatherX-Android-App.git",
        live: "https://github.com/mr-piyushkr/WeatherX-Android-App/releases",
        category: "android",
        featured: false
    },
    {
        id: 4,
        title: "Netflix Clone",
        description: "A pixel-perfect Netflix clone with responsive design, movie browsing, trailer integration, and user authentication system.",
        tech: ["React", "Firebase", "TMDB API", "CSS3"],
        images: ["https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&h=600&fit=crop&crop=center"],
        github: "https://github.com/mr-piyushkr/Netflix-Clone.git",
        live: "https://netflix-clone-piyush.vercel.app",
        category: "frontend",
        featured: false
    },
    {
        id: 5,
        title: "Spotify Clone",
        description: "A fully functional Spotify clone with music streaming, playlist management, and modern UI design with responsive layout.",
        tech: ["HTML5", "CSS3", "JavaScript", "Spotify API"],
        images: ["https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center"],
        github: "https://github.com/mr-piyushkr/SpotifyClone.git",
        live: "https://spotify-clone-piyush.github.io",
        category: "frontend",
        featured: false
    },
    {
        id: 6,
        title: "Task Manager App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        tech: ["React", "Node.js", "MongoDB", "Socket.io"],
        images: ["https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center"],
        github: "https://github.com/mr-piyushkr/Task-Manager.git",
        live: "https://taskmanager-piyush.herokuapp.com",
        category: "fullstack",
        featured: false
    },
    {
        id: 7,
        title: "Foodify - Android App",
        description: "A food delivery Android application with restaurant browsing, order management, and real-time tracking with modern Material Design.",
        tech: ["Java", "Android SDK", "Firebase", "Google Maps API"],
        images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&crop=center"],
        github: "https://github.com/mr-piyushkr/Foodify-Android-App.git",
        live: "https://github.com/mr-piyushkr/Foodify-Android-App/releases",
        category: "android",
        featured: false
    },
    {
        id: 8,
        title: "Student Performance Predictor",
        description: "Machine learning model to predict student CGPA and SGPA using various academic and demographic features with data preprocessing and feature engineering.",
        tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
        images: ["https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&crop=center"],
        github: "https://github.com/mr-piyushkr/Student-Performance-Prediction.git",
        live: "https://student-performance-predictor.streamlit.app",
        category: "ml",
        featured: false
    },
    {
        id: 9,
        title: "Churn Rate Prediction Using ANN",
        description: "Deep learning model using Artificial Neural Networks to predict customer churn rate with high accuracy using advanced feature engineering.",
        tech: ["Python", "TensorFlow", "Keras", "Pandas"],
        images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"],
        github: "https://github.com/mr-piyushkr/Churn-Rate-Prediction-Using-ANN.git",
        live: "https://churn-prediction-demo.streamlit.app",
        category: "ml",
        featured: false
    },
    {
        id: 10,
        title: "Shopping Admin Dashboard",
        description: "Comprehensive admin dashboard for e-commerce management with analytics, inventory tracking, and user management features.",
        tech: ["React", "Material-UI", "Chart.js", "Node.js"],
        images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center"],
        github: "https://github.com/mr-piyushkr/shopping-admin-dashboard.git",
        live: "https://shopping-admin-demo.vercel.app",
        category: "fullstack",
        featured: false
    },
    {
        id: 11,
        title: "Airbnb Booking Analysis",
        description: "Data analysis project exploring Airbnb booking patterns, pricing trends, and customer behavior using statistical methods and visualizations.",
        tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
        images: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center"],
        github: "https://github.com/mr-piyushkr/airbnb-booking-analysis.git",
        live: "https://airbnb-analysis-demo.streamlit.app",
        category: "ml",
        featured: false
    },
    {
        id: 12,
        title: "Customer Churn Prediction",
        description: "Machine learning project to predict customer churn using various algorithms and feature selection techniques for business insights.",
        tech: ["Python", "Scikit-learn", "XGBoost", "Plotly"],
        images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"],
        github: "https://github.com/mr-piyushkr/Customer-Churn-Prediction.git",
        live: "https://customer-churn-demo.streamlit.app",
        category: "ml",
        featured: false
    },
    {
        id: 13,
        title: "Smart Loan Risk Predictor",
        description: "AI-powered loan risk assessment system using machine learning to evaluate creditworthiness and predict default probability.",
        tech: ["Python", "Random Forest", "Flask", "Bootstrap"],
        images: ["https://images.unsplash.com/photo-1554224154-26032fced8bd?w=800&h=600&fit=crop&crop=center"],
        github: "https://github.com/mr-piyushkr/Smart-Loan-Risk-Predictor.git",
        live: "https://loan-risk-predictor.herokuapp.com",
        category: "ml",
        featured: false
    },
    {
        id: 14,
        title: "MyTaxi - Android App",
        description: "Taxi booking Android application with real-time GPS tracking, fare calculation, and driver-passenger matching system.",
        tech: ["Java", "Android SDK", "Google Maps API", "Firebase"],
        images: ["https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center"],
        github: "https://github.com/mr-piyushkr/MyTaxi-Android-App.git",
        live: "https://github.com/mr-piyushkr/MyTaxi-Android-App/releases",
        category: "android",
        featured: false
    }
];

const projectGrid = document.getElementById('projectGrid');
const projectModal = document.getElementById('projectModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalTech = document.getElementById('modalTech');
const modalImages = document.getElementById('modalImages');
const modalDescription = document.getElementById('modalDescription');
const modalGithub = document.getElementById('modalGithub');
const modalLive = document.getElementById('modalLive');

// Render Projects
const renderProjects = (category = 'all') => {
    const filteredProjects = category === 'all' ? projectsData : projectsData.filter(project => project.category === category);
    
    projectGrid.innerHTML = filteredProjects.map((project, index) => {
        const isFeatured = project.featured;
        const gridClass = isFeatured ? 'grid-large' : 'grid-small';
        const bgImage = project.images[0];
        
        return `
            <div class="project-card ${gridClass}" data-project-id="${project.id}" style="background-image: url('${bgImage}')">
                <div class="project-overlay">
                    <h4 class="project-card-title">${project.title}</h4>
                    <div class="project-card-tech">
                        ${project.tech.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Add click listeners
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = parseInt(card.dataset.projectId);
            openModal(projectId);
        });
    });
};

// Open Modal
const openModal = (projectId) => {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalGithub.href = project.github;
    modalLive.href = project.live;

    // Tech stack
    modalTech.innerHTML = project.tech.map(tech => 
        `<span class="modal-tech-tag">${tech}</span>`
    ).join('');

    // Images
    modalImages.innerHTML = project.images.map(img => 
        `<img src="${img}" alt="${project.title}" class="modal-image" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMUYyOTM3Ii8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDE4NVYxNzVIMTc1VjEyNVoiIGZpbGw9IiM2QjczODAiLz4KPHA+CjwvcGF0aD4KPC9zdmc+'"`
    ).join('');

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

// Close Modal
const closeModal = () => {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
};

// Modal Event Listeners
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Initialize Projects
renderProjects();

// Project Filter Event Listener
document.querySelector('.project-tabs').addEventListener('click', (e) => {
    if (!e.target.classList.contains('project-tab-btn')) return;
    
    document.querySelectorAll('.project-tab-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    const category = e.target.dataset.category;
    renderProjects(category);
});

// Contact Form
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const btnText = submitBtn.querySelector('.btn-text');
const btnLoading = submitBtn.querySelector('.btn-loading');

const validateForm = () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }

    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    }

    if (!message) {
        document.getElementById('messageError').textContent = 'Message is required';
        isValid = false;
    }

    return isValid;
};

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';

    try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert('Message sent successfully!');
            contactForm.reset();
        } else {
            alert('Failed to send message. Please try again.');
        }
    } catch (error) {
        alert('Error sending message. Please try again.');
    } finally {
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
    }
});

// Copy to clipboard functionality
document.querySelectorAll('.copyable').forEach(element => {
    element.addEventListener('click', async () => {
        const textToCopy = element.getAttribute('data-copy');
        try {
            await navigator.clipboard.writeText(textToCopy);
            
            // Show feedback
            const originalText = element.textContent;
            element.textContent = 'Copied!';
            element.style.color = '#10b981';
            
            setTimeout(() => {
                element.textContent = originalText;
                element.style.color = '#fff';
            }, 2000);
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = textToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            const originalText = element.textContent;
            element.textContent = 'Copied!';
            element.style.color = '#10b981';
            
            setTimeout(() => {
                element.textContent = originalText;
                element.style.color = '#fff';
            }, 2000);
        }
    });
});

// Typewriter effect
const typewriterElement = document.getElementById('typewriter');
const texts = ['Piyush kumar', 'Software Developer', 'Fullstack Developer', 'Android Developer'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterTimeout;
let isTypewriterActive = false;

function resetTypewriter() {
    clearTimeout(typewriterTimeout);
    textIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typewriterElement.textContent = '';
}

function typeWriter() {
    if (!isTypewriterActive) return;
    
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = textIndex === 0 ? 2000 : 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }
    
    typewriterTimeout = setTimeout(typeWriter, typeSpeed);
}

// Scroll animation observer
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Typewriter observer for about section
const typewriterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            resetTypewriter();
            isTypewriterActive = true;
            typewriterTimeout = setTimeout(typeWriter, 500);
        } else {
            isTypewriterActive = false;
            clearTimeout(typewriterTimeout);
        }
    });
}, { threshold: 0.3 });

// Observe all sections and their children
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.about-container, .toc-container, .category-title, .project-header, .project-grid, .thank-content'
    );
    animateElements.forEach(el => {
        el.classList.add('fade-up');
        observer.observe(el);
    });
    
    // Observe about section for typewriter reset
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
        typewriterObserver.observe(aboutSection);
    }
});