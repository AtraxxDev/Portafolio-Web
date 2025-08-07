// <!-- Script para el menú responsive -->
export default function MobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    let isOpen = false;

    toggle.addEventListener('click', () => {
        isOpen = !isOpen;
        if (isOpen) {
            menu.classList.remove('hidden');
            setTimeout(() => {
                menu.classList.remove('opacity-0', 'scale-y-0');
            }, 10);
        } else {
            menu.classList.add('opacity-0', 'scale-y-0');
            setTimeout(() => {
                menu.classList.add('hidden');
            }, 300);
        }
    });

    // Aquí agregamos que al hacer click en cualquier link dentro del menú móvil, se cierre el menú
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (isOpen) {
                menu.classList.add('opacity-0', 'scale-y-0');
                setTimeout(() => {
                    menu.classList.add('hidden');
                }, 300);
                isOpen = false;
            }
        });
    });
}