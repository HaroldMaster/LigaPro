export const teamCardSelectors = {
  teamCardFooter: '.team-card__footer',
  teamCardPopup: (id: string)=> { return `[data-test-id="team-card-popup-${id}"]`}
}