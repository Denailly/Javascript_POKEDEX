//PENSAR EM ALGUM ASYNC PARA RODAR SCROLLREVEAL APOS RENDERIZAR O QUE VEM DA REQUEST
setTimeout(
  () =>
    ScrollReveal().reveal(".pokemon", {
      interval: 75,
      scale: 0.7,
      easing: "cubic-bezier(0.5, 0, 0.5, 1)",
    }),
  500
);

function renderEffect() {
  //   ScrollReveal().reveal(".pokemon", {
  //     interval: 75,
  //     scale: 0.7,
  //     easing: "cubic-bezier(0.5, 0, 0.5, 1)",
  //   });

  setTimeout(
    () =>
      ScrollReveal().reveal(".pokemon", {
        interval: 75,
        scale: 0.7,
        delay: 500,
        easing: "cubic-bezier(0.5, 0, 0.5, 1)",
      }),
    30
  );
  setTimeout(ScrollReveal({ reset: true }), 30);
}

// BUG NO RESET, RESETA APENAS OS 5 A MAIS QUE FORAM CARREGADOS
