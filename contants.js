
const userId = 'feddupUser123'
const authenticatedButtons = [
    {
        id: 2,
        title: 'Rate & Review',
        desc: 'How are you liking ?',
        placeholder: 'Let us know your thoughts'
    },
    {
        id: 3,
        title: 'Feddback',
        desc: 'Public community post to shed light on generic bugs and features not working as intended',
        placeholder: 'What is making you feddup?'
    },
    {
        id: 4,
        title: 'Suggestions',
        desc: 'Public community post where you can suggest new features and updates',
        placeholder: 'Let us know your ideas'
    },
    {
        id: 5,
        title: 'FAQs',
        link: 'https://unsplash.com/'
    },
    {
        id: 6,
        title: 'Help',
        link: 'https://unsplash.com/'
    },
    {
        id: 7,
        title: 'Visit FeddUp',
        link: 'https://unsplash.com/'
    },
]

const unAuthenticatedButtons = [
    {
        id: 1,
        title: 'Sign In',
    },
    {
        id: 2,
        title: 'Rate & Review',
        desc: 'How are you liking ?',
        placeholder: 'Let us know your thoughts'
    },
    {
        id: 3,
        title: 'Feddback',
        desc: 'Public community post to shed light on generic bugs and features not working as intended',
        placeholder: 'What is making you feddup?'
    },
    {
        id: 4,
        title: 'Suggestions',
        desc: 'Public community post where you can suggest new features and updates',
        placeholder: 'Let us know your ideas'
    },
    {
        id: 5,
        title: 'FAQs',
        link: 'https://unsplash.com/'
    },
    {
        id: 6,
        title: 'Help',
        link: 'https://unsplash.com/'
    },
    {
        id: 7,
        title: 'Visit FeddUp',
        link: 'https://unsplash.com/'
    },
]



const feedbackIcons = [
    {
        id: 1,
        icon: `<svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45.7551 1H1V45.7551H45.7551V1Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M34.6281 37.2252C34.6281 31.0436 29.5592 25.9746 23.3775 25.9746C17.1959 25.9746 12.127 31.0436 12.127 37.2252H34.6281Z" fill="black" />
            <path d="M9.53076 10.0244L16.0833 16.7006" stroke="black" stroke-width="3.9997" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.0833 10.0244L9.53076 16.7006" stroke="black" stroke-width="3.9997" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M30.5481 10.0244L37.2243 16.7006" stroke="black" stroke-width="3.9997" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M37.2243 10.0244L30.5481 16.7006" stroke="black" stroke-width="3.9997" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>`
    },
    {
        id: 2,
        icon: `<svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.2529 1H1.4978V45.7551H46.2529V1Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M35.4086 37.2252C35.4086 31.0436 30.3397 25.9746 24.1581 25.9746C17.9764 25.9746 12.9075 31.0436 12.9075 37.2252C20.0782 33.7635 28.3616 33.7635 35.4086 37.2252Z" fill="black" />
            <path d="M15.504 20.9045C17.2793 20.9045 18.7185 19.4653 18.7185 17.69C18.7185 15.9147 17.2793 14.4756 15.504 14.4756C13.7287 14.4756 12.2896 15.9147 12.2896 17.69C12.2896 19.4653 13.7287 20.9045 15.504 20.9045Z" fill="black" />
            <path d="M11.1768 12.4981C11.1768 12.4981 16.9875 11.509 20.5729 18.4324" stroke="black" stroke-width="2.8346" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M33.8011 20.9055C35.5764 20.9055 37.0156 19.4663 37.0156 17.691C37.0156 15.9157 35.5764 14.4766 33.8011 14.4766C32.0258 14.4766 30.5867 15.9157 30.5867 17.691C30.5867 19.4663 32.0258 20.9055 33.8011 20.9055Z" fill="black" />
            <path d="M38.1283 12.4981C38.1283 12.4981 32.3175 11.509 28.7322 18.4324" stroke="black" stroke-width="2.8346" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>`
    },
    {
        id: 3,
        icon: `<svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.4394 1H1.68433V45.7551H46.4394V1Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.0257 16.4533C17.801 16.4533 19.2402 15.0142 19.2402 13.2389C19.2402 11.4636 17.801 10.0244 16.0257 10.0244C14.2504 10.0244 12.8113 11.4636 12.8113 13.2389C12.8113 15.0142 14.2504 16.4533 16.0257 16.4533Z" fill="black" />
            <path d="M31.9745 16.4533C33.7498 16.4533 35.1889 15.0142 35.1889 13.2389C35.1889 11.4636 33.7498 10.0244 31.9745 10.0244C30.1992 10.0244 28.76 11.4636 28.76 13.2389C28.76 15.0142 30.1992 16.4533 31.9745 16.4533Z" fill="black" />
            <path d="M34.6943 26.7148C33.2107 31.1656 29.0072 34.3801 24.0619 34.3801C19.1166 34.3801 14.913 31.1656 13.4294 26.7148" stroke="black" stroke-width="2.8346" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>`
    },
    {
        id: 4,
        icon: `<svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.2197 1H1.4646V45.7551H46.2197V1Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M35.093 25.9746C35.093 27.2109 34.8457 28.4473 34.4748 29.56C32.9912 34.0107 28.7877 37.2252 23.8424 37.2252C18.8971 37.2252 14.6936 34.0107 13.21 29.56C12.8391 28.4473 12.5918 27.2109 12.5918 25.9746H35.093Z" fill="black" stroke="black" stroke-width="5.6693" stroke-miterlimit="10" stroke-linecap="round" />
            <path d="M15.8063 16.4533C17.5816 16.4533 19.0207 15.0142 19.0207 13.2389C19.0207 11.4636 17.5816 10.0244 15.8063 10.0244C14.031 10.0244 12.5918 11.4636 12.5918 13.2389C12.5918 15.0142 14.031 16.4533 15.8063 16.4533Z" fill="black" />
            <path d="M31.8785 16.4533C33.6538 16.4533 35.093 15.0142 35.093 13.2389C35.093 11.4636 33.6538 10.0244 31.8785 10.0244C30.1032 10.0244 28.6641 11.4636 28.6641 13.2389C28.6641 15.0142 30.1032 16.4533 31.8785 16.4533Z" fill="black" />
        </svg>`
    },
    {
        id: 5,
        icon: `<svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.0002 1H1.24512V45.7551H46.0002V1Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M34.8732 25.9746C34.8732 27.2109 34.626 28.4473 34.2551 29.56C32.7715 34.0107 28.568 37.2252 23.6227 37.2252C18.6774 37.2252 14.4738 34.0107 12.9902 29.56C12.6193 28.4473 12.3721 27.2109 12.3721 25.9746H34.8732Z" fill="black" stroke="black" stroke-width="5.6693" stroke-miterlimit="10" stroke-linecap="round" />
            <path d="M22.1389 7.71134C22.2626 9.68947 21.5208 13.6457 16.4518 18.0965C9.77565 17.2311 7.05572 14.2639 6.06666 12.533C5.69576 11.9149 5.57213 11.544 5.57213 11.4203C4.95397 9.19494 6.1903 6.72228 8.41569 6.10411C10.6411 5.48595 13.1137 6.72228 13.7319 8.94767C13.1137 6.72228 14.3501 4.24962 16.5754 3.63146C18.8008 3.01329 21.2735 4.24962 21.8917 6.47501C22.0153 6.47501 22.1389 6.96954 22.1389 7.71134Z" fill="black" />
            <path d="M25.1059 7.71134C24.9823 9.68947 25.7241 13.6457 30.793 18.0965C37.4692 17.2311 40.1892 14.2639 41.1782 12.533C41.5491 11.9149 41.6727 11.544 41.6727 11.4203C42.2909 9.19494 41.0546 6.72228 38.8292 6.10411C36.6038 5.48595 34.1311 6.72228 33.513 8.94767C34.1311 6.72228 32.8948 4.24962 30.6694 3.63146C28.444 3.01329 25.9714 4.24962 25.3532 6.47501C25.2296 6.47501 25.1059 6.96954 25.1059 7.71134Z" fill="black" />
            <path d="M34.8732 25.9746C34.8732 27.2109 34.626 28.4473 34.2551 29.56H12.9902C12.6193 28.4473 12.3721 27.2109 12.3721 25.9746H34.8732Z" fill="white" />
        </svg>`
    }
]


const feedbackQuestions = [
    {
        id: 1,
        question: 'How did you get to know about Feddup?',
        type: 'radio',
        options: [
            {
                id: 21,
                option: 'I knew about Feddup',
            },
            {
                id: 22,
                option: 'Link from another app',
            },
            {
                id: 23,
                option: 'Social Media',
            },
            {
                id: 24,
                option: 'Internet Ad',
            },
            {
                id: 25,
                option: 'From friend or colleague',
            },
        ]
    },
    {
        id: 2,
        question: 'What is your purpose of visiting Feddup?',
        type: 'text'
    },
    {
        id: 3,
        question: 'How often do you visit Feddup?',
        type: 'checkbox',
        options: [
            {
                id: 31,
                option: 'Just for information',
            },
            {
                id: 32,
                option: 'For check reviews & feedback of other apps',
            },
            {
                id: 33,
                option: 'For reference to graphic design',
            },
            {
                id: 34,
                option: 'Others',
            }
        ]
    },
    {
        id: 4,
        question: 'How likely is it that you will recommend Feddup to your friends or colleagues?',
        type: 'rating'
    },
    {
        id: 5,
        question: 'Additional feature you would like us to include in the website.',
        type: 'text'
    },
    {
        id: 6,
        question: 'How did you get to know about Feddup?',
        type: 'text'
    },
]

const user = {
    name: "Ankit",
    id: 123456,
}

module.exports = { authenticatedButtons, unAuthenticatedButtons, feedbackIcons, feedbackQuestions, user, userId }

