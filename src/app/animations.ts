import { trigger, state, style, transition, animate, keyframes, animation, useAnimation } from "@angular/animations";

export const bounceOutLeftAnimation = animation(
    animate('500ms ease-out', keyframes([
        style({
            offset: .2,
            opacity: 1,
            transform: 'translateX(20px)'
        }),
        style({
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100px)'
        }),
    ]))
)

export let fadeInAnimation = animation([
    style({
        opacity: 0
    }),
    animate('{{ duration }} {{ easing }}')
], {
    params: {
        duration: '2s',
        easing: 'ease-out'
    }
})

export let fadeOutAnimation = animation([
    animate(2000, style({ opacity: 0}))
])

export let fade = trigger('fade', [

    transition(':enter', useAnimation(fadeInAnimation)),

    transition(':leave', useAnimation(fadeOutAnimation))

])

export let slide = trigger('slide', [
    transition(':enter', [
        style({
            transform: 'translateX(-10px)'
        }),
        animate(1000)
    ]),

    transition(':leave', useAnimation(bounceOutLeftAnimation))
])