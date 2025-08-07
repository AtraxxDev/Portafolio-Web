// <!-- Script Filter -->
export default function FilterCards() {

    document.addEventListener("DOMContentLoaded", function () {
        const filterButtons = document.querySelectorAll(".filter-btn");
        const projectCards = document.querySelectorAll(".project-card");

        filterButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                // Remueve la clase 'active' de todos los botones
                filterButtons.forEach((b) => b.classList.remove("bg-purple-700", "active"));
                // Agrega la clase 'active' al botón seleccionado
                btn.classList.add("bg-purple-700", "active");

                const filterValue = btn.getAttribute("data-filter");

                projectCards.forEach((card) => {
                    // Quita animación previa si existe
                    card.classList.remove("opacity-0", "scale-95", "transition", "duration-300");

                    if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
                        card.style.display = "block";
                        // Reforzamos animación
                        requestAnimationFrame(() => {
                            card.classList.add("transition", "duration-300", "opacity-0", "scale-95");
                            setTimeout(() => {
                                card.classList.remove("opacity-0", "scale-95");
                            }, 10);
                        });
                    } else {
                        // Oculta con animación
                        card.classList.add("transition", "duration-300", "opacity-0", "scale-95");
                        setTimeout(() => {
                            card.style.display = "none";
                            card.classList.remove("opacity-0", "scale-95");
                        }, 300);
                    }
                });
            });
        });

        // Activa el filtro 'All' por defecto
        const defaultBtn = document.querySelector('[data-filter="all"]');
        if (defaultBtn) {
            defaultBtn.click();
        }
    });

}