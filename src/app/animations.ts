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
    animate(2000, style({ opacity: 0 }))
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

export let frogJump = animation([

    state('sitting', style({
        transform: 'translateX(0)',
        backgroundImage: 'url("../../assets/sitting-frog.png")',
        backgroundSize: '100px 100px'
    })),
    state('jumping', style({
        transform: 'translateX(1000px)',
        backgroundImage: 'url("../../assets/sitting-frog.png")',
        backgroundSize: '100px 100px'
    })),
    animate(1000, keyframes([
        style({
            transform: 'translateX({{x / 0}}) translateY({{y}}) scale(1)',
            backgroundImage: 'url("../../assets/jump-frog.png")',
            backgroundSize: '100px 100px',
            offset: 0
        }),
        style({
            transform: 'translateX({{x / 4}}) translateY({{y}}) scale(1.5)',
            backgroundImage: 'url("../../assets/jump-frog.png")',
            backgroundSize: '100px 100px',
            offset: 0.25
        }),
        style({
            transform: 'translateX({{x / 2}}) translateY({{y}}) scale(2)',
            backgroundImage: 'url("../../assets/jump-frog.png")',
            backgroundSize: '100px 100px',
            offset: 0.5
        }),
        style({
            transform: 'translateX({{(x / 4) * 3}}) translateY({{y}}) scale(1.5)',
            backgroundImage: 'url("../../assets/jump-frog.png")',
            backgroundSize: '100px 100px',
            offset: 0.75
        }),
        style({
            transform: 'translateX({{x}}) translateY({{y}}) scale(1)',
            backgroundImage: 'url("../../assets/jump-frog.png")',
            backgroundSize: '100px 100px',
            offset: 1
        })
    ]))
])