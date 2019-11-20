/**
 * `rating-component`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class RatingComponent extends Polymer.Element {
    static get is() {
        return 'rating-component';
    }

    static get properties() {
        return {
            rate: {
                type: Number,
                value: 0,
                observer: '__getRate'
            }
        };
    }

    __clearStars(stars) {
        for (const star of stars)
            star.classList.remove('active');
    }

    __getRate() {
        const stars = this.shadowRoot.querySelectorAll('.star');

        this.__clearStars(stars);

        for (let i = 0; i < this.rate; i++)
            stars[i].classList.toggle('active');
    }
}

window.customElements.define(RatingComponent.is, RatingComponent);
