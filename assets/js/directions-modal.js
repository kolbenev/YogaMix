const directionModalData = {
  health: {
    title: "Оздоровительная йога",
    texts: [
      "Оздоровительная йога — это мягкая система физических упражнений (асан), дыхательных техник (пранаям) и релаксации.",
      "Направлена на восстановление организма, укрепление позвоночника, улучшение кровообращения и снятие стресса.",
      "Подходит для начинающих и не требует высокой физической подготовки.",
    ],
    buttonText: "Записаться",
  },

  therapy: {
    title: "Йогатерапия",
    texts: [
      "Йогатерапия — это персонализированный подход, сочетающий классические техники йоги, массажное оборудование и элементы оздоровительной практики: гимнастику, дыхание и медитацию.",
      "Направлена на работу с конкретными запросами: восстановление организма и поддержку при различных состояниях.",
      "Воздействие мягкое и бережное — с акцентом на суставы и позвоночник.",
    ],
    buttonText: "Записаться",
  },

  pregnant: {
    title: "Йога для беременных",
    texts: [
      "Йога для беременных — это безопасный способ поддержать физическое и эмоциональное состояние в этот период.",
      "Практика помогает снять боли в спине, улучшить кровообращение, укрепить мышцы тазового дна и мягко подготовиться к родам.",
      "Занятия включают адаптированные асаны, дыхательные техники и медитацию с учётом каждого триместра.",
    ],
    buttonText: "Записаться",
  },

  kids: {
    title: "Йога для детей",
    texts: [
      "Детская йога — это система, направленная на гармоничное развитие тела и эмоционального состояния ребёнка.",
      "Занятия проходят в игровой форме через движение и взаимодействие с предметами, включая элементы с использованием массажного оборудования.",
      "Основная цель — через игру развить гибкость, силу и выносливость, а также спокойствие и уверенность в себе.",
    ],
    buttonText: "Записаться",
  },

  teachers: {
    title: "Обучение инструкторов",
    texts: [
      "Обучение на инструктора по йоге включает изучение анатомии, физиологии, философии, техники асан и методики преподавания.",
      "Программа сочетает теорию и практику, позволяя глубоко понять принципы работы с телом и учениками.",
      "Вы учитесь у практикующих специалистов с реальным опытом. По завершении выдается сертификат.",
    ],
    buttonText: "Записаться",
  },

  tour: {
    title: "Йога-тур",
    texts: [
      "Йога-тур — это пространство для вдохновения и восстановления внутреннего ресурса.",
      "Путешествие, в котором вы перезагружаете тело и ум, находясь в красивом и поддерживающем месте.",
      "В программу входят утренние и вечерние практики йоги, самомассаж, дыхательные техники, медитации и мягкие растяжки.",
      "Дополняют опыт прогулки, отдых и глубокая перезагрузка сознания для новых свершений.",
      "Йога-тур в Крым! 20.08.2026 - 28.08.2026. Посёлок Орджоникидзе!",
    ],
    buttonText: "Записаться",
  },
};

const directionCards = document.querySelectorAll("[data-direction]");
const directionModal = document.querySelector("[data-direction-modal]");
const directionModalTitle = document.querySelector("#direction-modal-title");
const directionModalContent = document.querySelector(
  "[data-direction-modal-content]",
);
const directionModalButton = document.querySelector(".direction-modal__button");
const directionModalCloseElements = document.querySelectorAll(
  "[data-direction-modal-close]",
);

let lastFocusedElement = null;

if (
  directionCards.length &&
  directionModal &&
  directionModalTitle &&
  directionModalContent &&
  directionModalButton
) {
  const renderDirectionModal = (modalData) => {
    directionModalTitle.textContent = modalData.title;
    directionModalContent.textContent = "";
    directionModalButton.textContent = modalData.buttonText;

    modalData.texts.forEach((text) => {
      const paragraph = document.createElement("p");

      paragraph.className = "direction-modal__text";
      paragraph.textContent = text;
      directionModalContent.append(paragraph);
    });
  };

  const openDirectionModal = (modalData, triggerElement) => {
    lastFocusedElement = triggerElement;
    renderDirectionModal(modalData);
    directionModal.classList.add("direction-modal--open");
    directionModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("body--modal-open");
    directionModalButton.focus();
  };

  const closeDirectionModal = () => {
    directionModal.classList.remove("direction-modal--open");
    directionModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("body--modal-open");

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };

  directionCards.forEach((directionCard) => {
    directionCard.addEventListener("click", (event) => {
      const directionKey = directionCard.dataset.direction;
      const modalData = directionModalData[directionKey];

      if (!modalData) {
        return;
      }

      event.preventDefault();
      openDirectionModal(modalData, directionCard);
    });
  });

  directionModalCloseElements.forEach((closeElement) => {
    closeElement.addEventListener("click", () => {
      closeDirectionModal();
    });
  });

  document.addEventListener("keydown", (event) => {
    const isModalOpen = directionModal.classList.contains(
      "direction-modal--open",
    );

    if (event.key === "Escape" && isModalOpen) {
      closeDirectionModal();
    }
  });
}
