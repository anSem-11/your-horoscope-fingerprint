'use strict';

document.addEventListener('DOMContentLoaded', () => {

    let loveLink = document.querySelector('.love__link');
    let dailyLink = document.querySelector('.daily__link');
    let chineeseLink = document.querySelector('.chineese__link');
    let moneyLink = document.querySelector('.money__link');
    let followGroup = document.querySelector('.js-group-3')
    let topics = document.querySelector('.topic')

    let love = [
        'The Moon has passionate plans where pleasure and fun in your world are concerned!' + 
        ' Who says your love life can’t be a glorious lovefest? Attached? You could feel more intuitive toward what a lover wants and needs.' + 
        ' But that doesn’t mean you should keep your romantic and intimate needs a secret. If ever there was a time to' + 
        ' openly clarify your emotional and physical yearnings, it’s now!', 
        'The Moon is very much at home as it affects your emotional foundations and domesticity.' + 
        ' Love does want to form or flourish under your roof or near where you live. If nothing else, a bottle' + 
        ' This offers a superb chance for you to make yourself vulnerable with someone special, too.' + 
        ' of wine and Netflix could create a wonderfully chilled, shared, sexy environment!', 
        'The Moon leaves your sign, choosing to stimulate your self-esteem. But don’t let this' + 
        ' lunar influence cause you to feel more emotional about how a lover perceives you. If you allow' + 
        ' it to happen now, projecting insecurities onto someone close is possible. Any negative conclusions' + 
        ' you draw are likely to be exactly that – self-created.', 
        'You could be the focus of romantic attention now, and that will likely suit you just fine!' + 
        ' With the Moon gracing your proud and passionate sign, you could be a magnet for all things amorous.' + 
        ' But this lunar influence also encourages nurturing and caregiving. So, trust that what you show a lover' + 
        ' regarding both will likely be returned to you - in welcome droves!', 
        'Love benefits from closer connecting and interacting now. Whether this involves friends, exploring new online' + 
        ' dating apps, or gazing to the future with a partner, love forms and flourishes with teamwork and collaboration.' + 
        ' This could also be a time when you feel more open about what you feel - and willing to tell those in your life who' + 
        ' mean the most to you how valued they are.', 
        'The Moon illuminates mind-broadening and adventures. So, passionate plans made now could be thrilling.' + 
        ' Ask yourself and the one you love (or want to be closer to) what ’adventurous’ means to both of you. It can' + 
        ' mean embarking on a journey to exotic, warmer climes. But it could be as simple as breaking a tedious routine' + 
        ' and injecting spontaneous spice into your connection!',
        'The Moon affects one-to-one partnerships and your ability to relate to others. But this also enhances the attention' + 
        ' you give to thoughts, feelings and encouraging a lover or potential paramour to reciprocate them. Passionate connecting' + 
        ' and bonding are on offer. So, seize your chance to form and nurture a healthy relationship, whether you’re solo or attached.',
        'With the Moon growing full and affecting your service to others, you could feel drawn strongly to daily habits and routines.' + 
        ' There’s nothing wrong with that, either – as long as you don’t forget to include a lover or potential sweetheart!' + 
        ' So, try to involve them with tasks and errands. That’s how you’ll find something sweet or sexy within what might' + 
        ' normally be seen as tedious or mundane.',
        'With the Moon shifting to affect your status and reputation, you may need to make more effort to keep a consistent' + 
        ' focus on matters of the heart. Sure, responsibilities could shout loudly outside your emotional sphere,' + 
        ' particularly professional ones. But are there benefits to showing a lover - or yourself - how able you are' + 
        ' to focus career-related energy on your personal life? Absolutely!',
        'Embracing rather than resisting the unknown could be your ticket to unexplored passion. How wild, weird,' + 
        ' or wacky you choose to go is up to you. But this could be a time when you drop an intimate barrier or inhibition' + 
        ' to see what it feels like or what happens. See how setting higher ambitions for deep, intimate sharing promises to' + 
        ' be an eye and mind opener!',
    ];
    let chineese = [
        'You may be feeling lazy today. Important assignments should not be avoided. Job interviews will go well.' + 
        ' Personal relationships can conflict with work. Worthwhile projects and relationships take time. The crashing of' + 
        ' romantic fantasies can injure your ego. Try to see things realistically. Wise friends can help keep things in perspective.',
        'You may have to review or revise a plan today. Choose carefully. It will be difficult to change your mind once you’ve started' + 
        ' in any one direction. This isn’t the best time to start anything new. Think about ways to cut back on energy use at home.',
        'You may feel pulled in multiple directions today. One-to-one relationships, business partnerships, and legal matters can make' + 
        ' important breakthroughs. It is important to be sure of your position and confident that your choices do not compromise your own' + 
        ' sense of personal integrity. Manipulation behind the scenes may not help.',
        'Have faith and keep your sense of humor. Time spent on or near water will be healing and help restore your balance.' + 
        ' This can be as simple as a long, hot shower. Plan some sort of adventure for later.' + 
        ' You’ll be happiest if you can expand your horizons.',
        'There can be a real pull today between the desire to break away and an equally strong attachment to what is familiar and' + 
        ' safe. Your challenge is to find a balance between new and old, past and future. Delay a final decision. Let things develop' + 
        ' in their own time.',
        'Your ability to explain things to someone in a way that is clear and does not make them feel stupid will be an especially' + 
        ' useful talent today. Before events of the day catch you up, do something special, just for yourself.' + 
        ' This is a great day for making new friends.',
        'Today is excellent for long telephone calls, rapid text flirting, cozy chats or getting back in touch with old loves. Someone' + 
        ' now part of your inner circle of special friends might need you to make contact. Nebulous dreams and hunches will begin to solidify.',
        'Prepare for the miraculous! The things you most enjoy are key to easing any hurt or disappointment. Use your natural' + 
        ' curiosity in pursuit of experiences that help center your heart and calm the stresses that come your way. Every contact' + 
        ' you make is an opportunity to demonstrate unconditional kindness.',
        'This is a wonderful day for having fun. Focus on those you love. and what would help them. With little effort,' + 
        ' you can keep friends laughing. You may have been doing everything possible to improve a difficult situation.' + 
        ' Stress can bring on unwelcome and unnecessary insecurities. Do your best not to worry.',
        'It’s important to listen carefully to the concerns of family or co-workers. Longstanding conflicts can benefit' + 
        ' from seeking professional advice. Help is available if you only step up and ask. Share successes or financial benefits with' + 
        ' someone deserving of support. You are in a position to make a difference.'
    ]
    let money = [
        'Thanks to the Moon’s departure from your financial sector over the weekend, your financial instincts and imagination are' + 
        ' fuelled and you are emotionally and intuitively engaged as the dwarf planet Ceres spends her first full week back here.' + 
        ' This makes it easier to sense that the financial landscape has improved since Ceres retrograded back out just before Christmas,' + 
        ' with your 2022 financial year destined to be a very different year to 2021.',
        'With the Moon just two days away from your income sector and the Sun returning to your financial sector' + 
        ' later in the week, on both sides of the financial fence there is a sense of anticipation while calling for' + 
        ' a wait and see approach. This buys you time to first get your professional ducks in a row as forces on the' + 
        ' job and career fronts continue to come together.',
        'The Moon’s return to your work sector each month will always see it form a friendly aspect to both planets in' + 
        ' your income sector but as a Full Moon, this will gain a lot more energy over the coming days. The Moon is already' + 
        ' starting to form a friendly aspect to planets on the income front, making sure that whatever this might trigger on' + 
        ' the job front can have lucrative implications.',
        'As well as leaving you with an intuitive read on work and job matters, the Moon’s friendly aspect to both Jupiter and' + 
        ' Neptune in your income sector has helped to inspire your imagination on both fronts. With the Sun not only returning' + 
        ' to your income sector later in the week but to join forces with the planets of luck and dreams, the more you can embrace' + 
        ' and feed your imagination between now and then the better.',
        'Just three weeks after retrograding back into your income sector, for the second time this year, Mercury leaves your' + 
        ' income sector. Once again Mercury will leave you with the smart head for money needed to keep your head in the game' + 
        ' but this time he leaves behind planets that are driven to get this new financial year off to a lucrative start.',
        'As she spends her first full week back in your income sector after retrograding back out just before Christmas, the' + 
        ' dwarf planet Ceres is playing ’spot the difference’. This is an opportunity for a do over when it comes to understanding' + 
        ' your income needs and priorities, yet rather than facing the obstacles in 2021,' + 
        ' Ceres sees nothing but the possibilities that 2022 holds.',
        'In a case of perfect timing, just hours after the Moon not only returns to your financial sector but begins the lead up to' + 
        ' a Full Moon, Mercury returns to your income sector. Because the Moon returns ahead of Mercury they won’t clash but he and' + 
        ' his smart head for money will be here as it clashes with the Sun, something that could create a lot of intensity on both sides' + 
        ' of the financial fence over the next few days.',
        'At the same time that the Moon wraps up its monthly visit to your career sector and the friendly aspect it has just formed' + 
        ' to the South Node in your income sector, Pluto’s friendly aspect to the North Node in your financial sector peaks. In a year' + 
        ' when the money gods are working to maintain a balance between money coming in and money going out this is giving both sides of' + 
        ' the financial fence a boost in confidence.',
        'Three weeks after retrograding back into your financial sector, Mercury leaves today for the second' + 
        ' time this year. This time Mercury won’t do a U turn and come back but his double dip visit has been a' + 
        ' valuable chance to get your head back in the game and around your options, leaving you with the' + 
        ' smart head for money needed to navigate a financial year where the stars are aligned in your favour.',
        'While the Sun’s return to your financial sector two days ago has put the solar spotlight on your' + 
        ' financial situation and money matters as it does at this time every year, this is no ordinary year.' + 
        ' The Sun is only here for a month but this is the start of a three month push to make Jupiter, the planet of luck' + 
        ' and expansion’s first visit to your financial sector in 12 years count.'
    ]
    let daily = [
        'Now is not the best time to move fast or rush important decisions. A hurried decision can bring lots of problems:' + 
        ' your relationships with your relatives and family can suffer from misunderstandings, your career may face an unexpected' + 
        ' obstacle, or your health may suffer from minor issues caused by stress. Some serious financial consequences may mess' + 
        ' with your plans, too, so be extra careful when making money-related decisions. Avoid risks at all costs! You should' + 
        ' also avoid making major purchases now. Don’t feel like you need to express your love through opulent romantic gestures:' + 
        ' money can’t buy you love. If you share finances with your significant other, make sure you’re on the same page. Do your' + 
        ' best to avoid misunderstandings. If there are any tensions, communication is very important. Discuss every change that is' + 
        ' going on in your life. A long conversation will clear things up for both of you.',
        'It’s important to take credit for your work — you deserve it! Sometimes you need to stay humble, but now it’s time to step' + 
        ' forward and let others know how great you and your achievements actually are! People need to know about your awesome' + 
        ' projects. Claim to your idea before someone else steals it. When it comes to your relationships with your loved ones,' + 
        ' try to be patient. If you disagree with what someone is saying, that should not stop you from being close to them or' + 
        ' having fun with them. Just be aware that there may be certain topics you should avoid bringing up in a conversation.' + 
        ' If someone irritates you, try to resist the temptation to do something annoying in return. Make sure to be as patient' + 
        ' as possible. Once you get angry, you won’t be able to stop. Stay calm and let little things pass without being annoyed' + 
        ' by them. Now it is wise to keep your distance and keep your emotions under control.',
        'An issue from your past may cause a conflict soon. Your relationship may suffer from conflicts caused by this issue,' + 
        ' so be careful and patient! Try to look for reasons to laugh. Don’t let your emotions mess with your plans or hurt others.' + 
        ' Instead of lashing out, look at your inner world. Are there some feelings that need to be dealt with? Are you hiding some' + 
        ' inner pain? Is there a decision you need to make as soon as possible? Maybe it’s time to talk to your partner and find' + 
        ' out what you both can do to solve an issue that is hurting you and making you feel uneasy. If you need help understanding' + 
        ' your own feelings, reach out to someone you trust. It can be your friend, your parent, or your teacher. A cathartic chat will' + 
        ' be really helpful! Talking about your feelings with someone neutral may clear things up and make you feel so much better.' + 
        ' Your feelings about a situation may swing dramatically.',
        'Your confidence level will be boosted soon — you will feel better than ever. However, there’s a catch: others may think that' + 
        ' you’re just a bit too confident… Be careful what you say or do if you don’t want to cause any unnecessary conflicts.' + 
        ' If you come across as thoughtless, this may harm your relationships with your loved ones or co-workers. Sometimes you' + 
        ' don’t notice how sharp your tongue really is! If conflicts do appear, do your best to deescalate them. Be patient and calm, don’t' + 
        ' let your emotions hurt others. When it comes to your career, a rare opportunity may land in your lap today, so make' + 
        ' sure to use it to your advantage. It may be a panic-inducing experience — just rolling the dice and going for it— but now is the' + 
        ' right time to take a couple of calculated risks. Blaze this trail with your confidence, and soon you will achieve your goals.' + 
        ' Do your best to tap into your courageous spirit!',
        'You can expect a lot of surprising encounters, especially at work. Your coworker may become a lot friendlier, and if your' + 
        ' work position has recently changed, it would be wise to think carefully before deciding what to do next. If you’re on a' + 
        ' professional roll, don’t let your insecurities stop you from achieving your goals. Try to keep it positive. Spend more' + 
        ' time with people who support and understand you, and avoid those who drag you down. You don’t need negativity in your' + 
        ' life. A long conversation with someone unsupportive can seriously take the wind out of your sails — avoid this at all' + 
        ' costs! If you’re waiting for some news about your project or endeavor, you may feel anxious, but unfortunately,' + 
        ' there’s little you can do. You will have to wait for the universe to do its thing. Some shortcuts may save your time, but' + 
        ' they will have disastrous long-term consequences. Be calm and trust that things will work out.',
        'You’re in an exciting mood. The universe hears you and will soon send some romantic adventures your way. You probably' + 
        ' already know someone who can help you make the most out of your mood, so why not give them a call? Soon, someone’s sketchy' + 
        ' behavior will make you question their intentions. What is going on, really? However, there’s always a possibility that your' + 
        ' suspicions are not based on reality. So, before confronting someone, analyze your situation in detail. A new focus on your' + 
        ' health can come into your life soon, urging you to banish junk food and start hitting the gym. Look for new ideas on how to' + 
        ' make your lifestyle healthier. Ask other people — there are a lot of ways to live healthier.' + 
        ' When it comes to your career, the stars are saying that you need to make some important changes, the kind' + 
        ' that brings the recognition you crave. Believe with your heart that you have what it takes — you need a confidence boost.',
        'You are not afraid to stand up for what you believe, and soon your passion will help you overcome any obstacle. However,' + 
        ' you don’t need to tell everyone about your good deeds. Publicizing them may come across as virtue signaling, so try to' + 
        ' stay humble. No matter how kind and courageous you are, it’s important to remember that other people have these qualities, too.' + 
        ' You may clash with someone whose self-belief is as strong as yours. Instead of arguing, try working together to reach a goal that' + 
        ' is important to both of you. Identify your goal, think how you can achieve it, and then give it your all. Find what' + 
        ' is important to you: your mind may be overflowing with great ideas, but you can’t follow up on each of them.' + 
        ' What will you choose to direct your energy toward? Which goal is the most important one? Analyze your situation' + 
        ' and your options; don’t let your fiery impulses force you to make a rushed decision.',
        'A lot of things depend on how you cope with annoying or provocative statements. The last thing you want to' + 
        ' do now is to get angry or start stressing about something that is pretty much irrelevant. Do your best to keep your cool.' + 
        ' To make the most of your fiery impulses, push your way to the front and get your act together. Show others what you’re capable of.' + 
        ' This is not the right time to hang back! It’s also important to look at your emotional dimension. What are your feelings about' + 
        ' your current situation? Maybe it’s the right time to talk to someone you trust? You should be aware of your deep need for' + 
        ' comfort and support. A long conversation with someone dear to you will help you heal an old wound.' + 
        ' Your intuition is also quite strong' + 
        ' at the moment, allowing you to have a better idea of what is going on.' + 
        ' Trust your heart when making an important decision — it will' + 
        ' tell you what you really need to do and what you need to avoid.',
        'Some recent emotional storms have made your old wounds ache again. Now it’s important to' + 
        ' ask your loved ones for support and comfort.' + 
        ' Talk to someone who can understand you and maybe give you a couple of helpful tips.' + 
        ' You shouldn’t fight your pain alone. Soon, a calming' + 
        ' influence will settle over you. You will have the courage to go after what you' + 
        ' want without any hesitation. It’s time to change something' + 
        ' in your life. Maybe, change your look? Finding a new style of clothing or a different' + 
        ' hairstyle will make you feel so satisfied. If you feel' + 
        ' like everyone is pressuring you to pick up the pace, you can try retreating to a quiet place where you' + 
        ' feel safe. Work alone and listen to' + 
        ' your own thoughts; this will help you focus and come up with lots of creative ideas.' + 
        ' When you finally finish your duties, give yourself a' + 
        ' reward (for example, something delicious but a bit… unhealthy) for working so hard — you totally deserve it!',
        'Pay attention to how you present yourself when dealing with people in a position of power.' + 
        ' This will determine how others perceive your' + 
        ' ideas. People may mistake your sensitivity for timidity but you actually have lots of tenacity' + 
        ' and power hidden within you. When you' + 
        ' know you can succeed, don’t settle for less. You know you can achieve a lot of great' + 
        ' things! You have all the support from the universe right now, so think about starting an ambitious project.' + 
        ' Start your own business, maybe? Or master a new skill? Or visit an unfamiliar place? Instigating an important' + 
        ' change in your life or career right now can benefit you greatly. Time to venture into unknown territory and explore new things!' + 
        ' You won’t be able to develop your skills or grow as a person if you stay in your comfort zone. At first, you may' + 
        ' feel awkward, but that’s totally okay! Try to be patient and kind to yourself. Keep a positive attitude!',
    ]


    function RandLove(love) {
        let rand = Math.floor(Math.random() * love.length);
        return love[rand];
    }

    function RandDaily(daily) {
        let rand = Math.floor(Math.random() * daily.length);
        return daily[rand];
    }

    function RandChineese(chineese) {
        let rand = Math.floor(Math.random() * chineese.length);
        return chineese[rand];
    }

    function RandMoney(money) {
        let rand = Math.floor(Math.random() * money.length);
        return money[rand];
    }

    loveLink && loveLink.addEventListener('click', () => {
        followGroup.classList.remove('hide');
        topics.classList.add('hide');
        const randomPrediction = RandLove(love);
        console.log('randomPrediction', randomPrediction);
        Cookies.set('prediction', randomPrediction, {expires: 99999});     
    });

    dailyLink && dailyLink.addEventListener('click', () => {
        followGroup.classList.remove('hide');
        topics.classList.add('hide');
        const randomPrediction = RandDaily(daily);
        Cookies.set('prediction', randomPrediction, {expires: 99999});     
    });

    chineeseLink && chineeseLink.addEventListener('click', () => {
        followGroup.classList.remove('hide');
        topics.classList.add('hide');
        const randomPrediction = RandChineese(chineese);
        Cookies.set('prediction', randomPrediction, {expires: 99999});     
    });

    moneyLink && moneyLink.addEventListener('click', () => {
        followGroup.classList.remove('hide');
        topics.classList.add('hide');
        const randomPrediction = RandMoney(money);
        Cookies.set('prediction', randomPrediction, {expires: 99999});     
    });

});
