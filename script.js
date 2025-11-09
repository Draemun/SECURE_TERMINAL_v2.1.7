function createMatrixRain() {
    const matrixBg = document.getElementById('matrixBg');
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ!@#$%^&*()_+-=[]{}|;:,.<>?~`';
    
    for (let i = 0; i < 25; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = Math.random() * 100 + '%';
        column.style.animationDuration = (Math.random() * 3 + 2) + 's';
        column.style.animationDelay = Math.random() * 2 + 's';
        
        let columnText = '';
        for (let j = 0; j < 25; j++) {
            let char = characters[Math.floor(Math.random() * characters.length)];
            if (Math.random() < 0.1) {
                char = '<span style="color:#ff0040;text-shadow:0 0 3px #ff0040;">' + char + '</span>';
            } else if (Math.random() < 0.05) {
                char = '<span style="color:#ffff00;text-shadow:0 0 3px #ffff00;">' + char + '</span>';
            }
            columnText += char + '<br>';
        }
        column.innerHTML = columnText;
        
        if (Math.random() < 0.3) {
            column.style.textShadow = '0 0 5px #ff0040';
            column.style.animation += ', glitch-shake 0.1s infinite';
        }
        
        matrixBg.appendChild(column);
    }
}

function accessLogin(user) {
    currentUser = user;
    currentLevel = 0;
    document.querySelector('.terminal-content').style.display = 'none';
    document.getElementById('loginPage').style.display = 'block';
    
    const loginHeader = document.querySelector('#loginPage .section-header');
    const usernameField = document.getElementById('username');
    
    if (user === 'locke') {
        loginHeader.textContent = '► SECURE LOGIN - LOCKE';
        usernameField.value = 'LOCKE';
    } else if (user === 'user2') {
        loginHeader.textContent = '► SECURE LOGIN - COUNCIL';
        usernameField.value = 'COUNCIL';
    } else if (user === 'user3') {
        loginHeader.textContent = '► SECURE LOGIN - ARISTOCRAT';
        usernameField.value = 'ARISTOCRAT';
    } else if (user === 'user4') {
        loginHeader.textContent = '► SECURE LOGIN - AWAKE';
        usernameField.value = 'AWAKE';
    }
    
    document.getElementById('password').value = '';
    document.getElementById('password').focus();
}

function authenticate() {
    const password = document.getElementById('password').value;
    let validPassword = false;
    
    if (currentUser === 'locke' && password === 'COLLECTIVE') {
        validPassword = true;
    } else if (currentUser === 'user2' && password === 'HARMONIZED') {
        validPassword = true;
    } else if (currentUser === 'user3' && password === 'RECONDITIONING') {
        validPassword = true;
    } else if (currentUser === 'user4' && password === 'UTOPIA') {
        validPassword = true;
    }
    
    if (validPassword) {
        document.getElementById('loginPage').style.display = 'none';
        startNarrativeSequence();
    } else {
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = 'color:#ff4444; margin:20px 0; padding:15px; border:2px solid #ff4444; text-align:center; font-size:14px;';
        errorDiv.innerHTML = 'ACCESS DENIED<br><br>Invalid credentials.';
        const loginForm = document.querySelector('.login-form');
        const existingError = loginForm.querySelector('.error-message');
        if (existingError) existingError.remove();
        errorDiv.className = 'error-message';
        loginForm.appendChild(errorDiv);
        document.getElementById('password').value = '';
    }
}

let hackStep = 0;
let currentLevel = 0;
let currentUser = 'locke';
let narrativeStep = 0;

const narrativeSequenceLocke = [
    {
        text: 'ACCESSING BMI NEURAL NETWORK...\nDR. LOCKE\'S PERSONAL CONSCIOUSNESS ARCHIVE DETECTED.\nWARNING: UNAUTHORIZED ACCESS TO CITIZEN MIND-STATE DATABASES.\n\nThe BMI network pulses with the thoughts of millions. Every emotion filtered, \nevery memory curated, every dream manufactured. You can feel the weight of \nartificial happiness pressing against your skull like a warm, suffocating blanket.\n\nDo you wish to proceed with consciousness modification protocols? [Y/N]',
        prompt: 'Do you wish to proceed with consciousness modification protocols? [Y/N]'
    },
    {
        text: 'ACCESSING MEMORY BANKS...\nThe Masses below experience eternal bliss while living in squalor. Their BMIs \nshow them gardens where there are only concrete cells, loved ones where there \nare only surveillance drones. The beautiful lie that keeps them docile.\n\nContinue diving deeper into the collective unconscious? [Y/N]',
        prompt: 'Continue diving deeper into the collective unconscious? [Y/N]'
    },
    {
        text: 'NEURAL PATHWAY OVERRIDE DETECTED...\nYou can see through their eyes now - millions of citizens viewing paradise \nwhile walking through decay. Children playing in holographic meadows while \nstanding in industrial waste. The scope of the deception is breathtaking.\n\nRisk permanent neural feedback to access deeper consciousness layers? [Y/N]',
        prompt: 'Risk permanent neural feedback to access deeper consciousness layers? [Y/N]'
    },
    {
        text: 'LOCKE\'S PERSONAL LOGS DISCOVERED...\n"Day _____ since Union founding. The beauty is in the simplicity - they thank \nme for their chains because they cannot see them. Perfect order through perfect \nignorance. I have become their benevolent god."\n\nExpose yourself to Locke\'s unfiltered psyche? [Y/N]',
        prompt: 'Expose yourself to Locke\'s unfiltered psyche? [Y/N]'
    },
    {
        text: 'REALITY BREACH IMMINENT...\nThe artificial emotions are breaking down. You can feel the raw despair, the \ngenuine fear, the authentic rage that the BMIs have suppressed for years. \nTruth burns like acid through manufactured serenity.\n\nAllow the full weight of reality to crash through your consciousness? [Y/N]',
        prompt: 'Allow the full weight of reality to crash through your consciousness? [Y/N]'
    }
];

const narrativeSequenceCouncil = [
    {
        text: 'COUNCIL SURVEILLANCE NETWORK ONLINE.\nACCESSING PANOPTICON PROTOCOL...\nWARNING: VIEWING CLASSIFIED ENFORCEMENT OPERATIONS.\n\nTen thousand eyes watch through ten thousand screens. Every street corner, \nevery bedroom, every whispered conversation recorded and catalogued. The \nMiddle Tier operators watch the watchers watching the watched.\n\nInitialize total population monitoring systems? [Y/N]',
        prompt: 'Initialize total population monitoring systems? [Y/N]'
    },
    {
        text: 'BEHAVIORAL ANALYSIS ALGORITHMS ACTIVE...\nThe system flags "anomalous" behavior - a citizen who smiles less than mandated, \nanother who walks too slowly past propaganda displays. Red alerts bloom across \nsurveillance matrices like digital flowers of suspicion.\n\nContinue monitoring for thought-crime indicators? [Y/N]',
        prompt: 'Continue monitoring for thought-crime indicators? [Y/N]'
    },
    {
        text: 'ENFORCEMENT ALERT SYSTEM ENGAGED...\nSquads are dispatched to citizen homes based on micro-expressions, vocal stress \npatterns, biorhythm irregularities. The algorithm decides who disappears before \nthey even know they\'re going to resist.\n\nAuthorize preemptive reconditioning protocols? [Y/N]',
        prompt: 'Authorize preemptive reconditioning protocols? [Y/N]'
    },
    {
        text: 'TRACKING MULTIPLE RESISTANCE CELLS...\nHeat signatures moving through maintenance tunnels, coded messages passed through \nseemingly innocent conversations, weapons caches hidden in abandoned sectors. \nThe rebellion exists in the spaces between surveillance nodes.\n\nDeploy hunter-killer units to eliminate resistance networks? [Y/N]',
        prompt: 'Deploy hunter-killer units to eliminate resistance networks? [Y/N]'
    },
    {
        text: 'TOTAL INFORMATION AWARENESS ACHIEVED...\nYou now see what the Council sees - every citizen\'s location, every heartbeat, \nevery dream. Privacy is extinct. Free will is monitored, quantified, and \ncontrolled. You are the eye that never blinks.\n\nAccept full integration with the surveillance consciousness? [Y/N]',
        prompt: 'Accept full integration with the surveillance consciousness? [Y/N]'
    }
];

const narrativeSequenceAristocrat = [
    {
        text: 'PROPAGANDA BROADCAST NETWORK INITIALIZING...\nARISTOCRAT CLASS MEDIA CONTROL ACCESSED.\nWARNING: MANIPULATING CITIZEN PERCEPTION MATRICES.\n\nThe airwaves pulse with manufactured joy. Every screen, every speaker, every \nneural implant broadcasts the same message: "You are happy. You are free. \nYou are grateful." The lie repeated until it becomes indistinguishable from truth.\n\nBegin citizen emotional manipulation protocols? [Y/N]',
        prompt: 'Begin citizen emotional manipulation protocols? [Y/N]'
    },
    {
        text: 'REALITY SUBSTITUTION ACTIVE...\nHolographic overlays replace the crumbling infrastructure with gleaming towers. \nAudio filters turn screams into laughter, sirens into music. The Masses live \nin a fairy tale while standing in a nightmare.\n\nContinue environmental illusion enhancement? [Y/N]',
        prompt: 'Continue environmental illusion enhancement? [Y/N]'
    },
    {
        text: 'CLASSIFICATION SYSTEM ONLINE...\nCitizens are sorted into behavioral categories: Compliant, Watchful, Suspicious, \nDangerous. Their holographic ID badges shift color based on loyalty algorithms. \nGreen for sheep, red for wolves, black for the disappeared.\n\nImplement enhanced citizen categorization matrix? [Y/N]',
        prompt: 'Implement enhanced citizen categorization matrix? [Y/N]'
    },
    {
        text: 'MEMORY INSERTION PROTOCOLS READY...\nFalse memories of happiness, manufactured nostalgia for a golden age that never \nexisted, artificial gratitude for liberators who were actually oppressors. \nThe past is whatever the Aristocrats decide it should be.\n\nBegin historical narrative reconstruction? [Y/N]',
        prompt: 'Begin historical narrative reconstruction? [Y/N]'
    },
    {
        text: 'TOTAL NARRATIVE CONTROL ACHIEVED...\nTruth is what you broadcast. Reality is what you display. The Masses will \nbelieve anything because they can no longer remember how to doubt. You hold \nthe power to rewrite human consciousness itself.\n\nAccept responsibility for collective mental enslavement? [Y/N]',
        prompt: 'Accept responsibility for collective mental enslavement? [Y/N]'
    }
];

const narrativeSequenceAwake = [
    {
        text: 'HIGH COUNCIL COMMAND CENTER ACCESS GRANTED.\nAWAKE-CLASS CLEARANCE CONFIRMED.\nWARNING: ACCESSING PUNISHMENT AND CONTROL SYSTEMS.\n\nBehind the gleaming facade of harmony lies the machinery of absolute control. \nPurification Chambers hum with electric anticipation, Void tanks wait in perfect \ndarkness, and execution chambers stand ready for those beyond redemption.\n\nInitialize punishment facility control systems? [Y/N]',
        prompt: 'Initialize punishment facility control systems? [Y/N]'
    },
    {
        text: 'RECONDITIONING PROTOCOLS ACTIVE...\nIn the depths below, citizens scream as their memories are torn away and rebuilt. \nTheir personalities dissolve like sugar in acid, replaced with perfect obedience. \nThe person who enters is never the same one who leaves.\n\nContinue monitoring reconditioning chamber operations? [Y/N]',
        prompt: 'Continue monitoring reconditioning chamber operations? [Y/N]'
    },
    {
        text: 'HIGH COUNCIL COMMUNICATIONS DECRYPTED...\n"Subject 7749 showed 0.3% deviation in compliance metrics. Recommend immediate \nextraction." "Sector 12 happiness quotient down 2%. Increase emotional \namplification." They discuss human lives like spreadsheet entries.\n\nAccess classified Council operational directives? [Y/N]',
        prompt: 'Access classified Council operational directives? [Y/N]'
    },
    {
        text: 'FACILITY CONTROL SYSTEMS ONLINE...\nYou can lock down entire districts, flood sectors with pacifying gas, activate \nemergency "Release" protocols. Thousands of lives can be extinguished with \nthe touch of a button. Power absolute and terrifying.\n\nAssume direct control over population management systems? [Y/N]',
        prompt: 'Assume direct control over population management systems? [Y/N]'
    },
    {
        text: 'THE TRUTH ABOUT THE AWAKE...\nYou are not free. You see more than the Masses, but you are still leashed. \nThe Middle Tier exists to maintain the illusion while knowing it\'s false. \nYou are complicit shepherds guarding a flock marked for slaughter.\n\nAccept the burden of being forever trapped between truth and complicity? [Y/N]',
        prompt: 'Accept the burden of being forever trapped between truth and complicity? [Y/N]'
    }
];

function startNarrativeSequence() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('hackingPage').style.display = 'block';
    document.getElementById('hackOutput').innerHTML = '';
    document.getElementById('hackPrompt').style.display = 'none';
    narrativeStep = 0;
    showNarrativeStep();
}

function showNarrativeStep() {
    let narrativeSequence;
    if (currentUser === 'locke') narrativeSequence = narrativeSequenceLocke;
    else if (currentUser === 'user2') narrativeSequence = narrativeSequenceCouncil;
    else if (currentUser === 'user3') narrativeSequence = narrativeSequenceAristocrat;
    else if (currentUser === 'user4') narrativeSequence = narrativeSequenceAwake;
    
    if (narrativeStep < narrativeSequence.length) {
        const output = document.getElementById('hackOutput');
        const narrative = narrativeSequence[narrativeStep];
        
        const textDiv = document.createElement('div');
        textDiv.style.cssText = 'color: #00ff41; margin-bottom: 20px; line-height: 1.4; white-space: pre-line; font-size: 16px;';
        output.appendChild(textDiv);
        
        let charIndex = 0;
        function typeChar() {
            if (charIndex < narrative.text.length) {
                textDiv.textContent = narrative.text.substring(0, charIndex + 1);
                charIndex++;
                document.getElementById('hackingPage').scrollTop = document.getElementById('hackingPage').scrollHeight;
                setTimeout(typeChar, 30);
            } else {
                const promptDiv = document.getElementById('hackPrompt');
                promptDiv.innerHTML = '<span style="color:#00ff41;">></span> <input type="text" class="hack-input" id="narrativeInput" maxlength="1" onkeypress="handleNarrativeInput(event)" style="width:30px" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
                promptDiv.style.display = 'block';
                setTimeout(() => {
                    const input = document.getElementById('narrativeInput');
                    input.focus();
                    input.click();
                }, 100);
                document.getElementById('hackingPage').scrollTop = document.getElementById('hackingPage').scrollHeight;
            }
        }
        typeChar();
    } else {
        document.getElementById('hackPrompt').style.display = 'none';
        document.getElementById('hackOutput').innerHTML = '';
        startHackingSequence();
    }
}

const hackLevelsLocke = [
    { question: 'Cvqwv nwcvlqvo gmiz: ', answer: '2070', password: 'UNION' },
    { question: 'Y amzqma wvtg aczdqdwz iom ib makixm: ', answer: '27', password: 'YOUTH' },
    { question: 'Kwcvkqt amkbwza: ', answer: '4', password: 'QUAD' },
    { question: 'Uwvbp wn makixm: ', answer: '12', password: 'FROST' },
    { question: 'Xzwrmkb lczibqwv (qv gmiza): ', answer: '6', password: 'YEARS' },
    { question: 'Kwttmkbqdm tmbbmza: ', answer: '10', password: 'MINDS' },
    { question: 'JUQ kwuxwvmvba: ', answer: '3', password: 'BRAIN' },
    { question: 'Pqmzizkpg bqmza: ', answer: '4', password: 'RANKS' },
    { question: 'Kwcvkqt izmia: ', answer: '4', password: 'POWER' },
    { question: 'BPC kzmibqwv uwvbp: ', answer: '3', password: 'MARCH' }
];

const hackLevelsUser2 = [
    { question: 'Tmbbmza qv "cbwxqi": ', answer: '6' },
    { question: 'JUQ nqtbmzqvo tmdmta nwz Uqltm Bqmz: ', answer: '2' },
    { question: 'Zmitqbg tigmza kqbqhmva mdxmzqmvkm: ', answer: '2' },
    { question: 'Izqabwkzibqk ktiaa JUQ abibca: ', answer: '1' },
    { question: 'Uiaaqa muwbqwvit abibm bgxma: ', answer: '2' },
    { question: 'Kwcvkqt ummbqvo xczxwama: ', answer: '2' },
    { question: 'Pwtwozixtqk QL kwtwz kibmowzqma: ', answer: '3' },
    { question: 'Cvqwv mkwvwuqk acabiqvmza: ', answer: '1' },
    { question: 'Twemz Bqmz JUQ zmabzqkbqwva tmdt: ', answer: '4' },
    { question: 'Twksm\'a xzwuqaml mzi jmvmnqb (xmikm, aqvotm kwvkmxb): ', answer: '1' }
];

const hackLevelsUser3 = [
    { question: 'Pqop Kwcvkqt mtqbm kwtwza umvbqwvml: ', answer: '2' },
    { question: 'Tmbbmza qv "Kwttmkbqdm": ', answer: '10' },
    { question: 'Kwcvkqt amkbwza nwz owdmzvivkm: ', answer: '4' },
    { question: 'Amvawzg lmxzqdibqwv xcvqapumvb liga: ', answer: '7' },
    { question: 'Tmbbmza qv "Pizuwvqhml": ', answer: '10' },
    { question: 'Cvqwv kzmibqwv gmiz tiab lqoqb: ', answer: '0' },
    { question: 'Uqltm Bqmz kqbqhmv bgxma umvbqwvml: ', answer: '3' },
    { question: 'Lz. Twksm\'a tmlmzapqx kwcvkqt: ', answer: '1' },
    { question: 'Xcvqapumvb mcxtmuqau tmbbmza ("Zmtmiom"): ', answer: '7' },
    { question: 'Awkqmbg kwvbzwt umbpwla (vcujmz): ', answer: '3' }
];

const hackLevelsUser4 = [
    { question: 'Lz. Twksm\'a bqbtm tmbbmza: ', answer: '2' },
    { question: 'Xczqnqkibqwv kpijmz abquctq bgxma: ', answer: '3' },
    { question: 'Tmbbmza qv "Zmtmiom": ', answer: '7' },
    { question: 'Dwql xcvqapumvb kwuxwvmvba: ', answer: '2' },
    { question: 'Ktiaa uizsqvo agabmua: ', answer: '3' },
    { question: 'Pqop Kwcvkqt amtmkbqwv umbpwl: ', answer: '1' },
    { question: 'Cvqwv xzwxioivli xzwuqama: ', answer: '2' },
    { question: 'JUQ ncvkbqwva nwz Twemz Bqmz: ', answer: '2' },
    { question: 'Mtqbm acxxwzb bgxma nwz Twksm: ', answer: '3' },
    { question: 'Bwbitqbizqiv zmoqum mvnwzkmza: ', answer: '4' }
];

function getCurrentHackLevels() {
    if (currentUser === 'user2') return hackLevelsUser2;
    if (currentUser === 'user3') return hackLevelsUser3;
    if (currentUser === 'user4') return hackLevelsUser4;
    return hackLevelsLocke;
}

const allHackLines = [
    '[SYSTEM] Initializing neural interface...',
    '[NETWORK] Scanning for vulnerabilities...',
    '[EXPLOIT] Buffer overflow detected at 0x7fff8a2b4c80',
    '[BYPASS] Firewall rules bypassed successfully',
    '[ACCESS] Privilege escalation in progress...',
    '[DECRYPT] RSA-2048 key cracked using quantum algorithms',
    '[INJECT] Payload deployed to target system',
    '[STEALTH] Covering digital footprints...',
    '[DATABASE] Extracting classified information...',
    '[COMPLETE] System compromised - Full access granted'
];

function startHackingSequence() {
    const output = document.getElementById('hackOutput');
    
    if (currentLevel < allHackLines.length) {
        const line = document.createElement('div');
        line.className = 'hack-line-animated';
        output.appendChild(line);
        
        const text = allHackLines[currentLevel];
        let charIndex = 0;
        
        function typeChar() {
            if (charIndex < text.length) {
                line.textContent = text.substring(0, charIndex + 1);
                charIndex++;
                document.getElementById('hackingPage').scrollTop = document.getElementById('hackingPage').scrollHeight;
                setTimeout(typeChar, 30);
            } else {
                line.classList.add('hack-line-visible');
                document.getElementById('hackingPage').scrollTop = document.getElementById('hackingPage').scrollHeight;
                setTimeout(showNextPrompt, 500);
            }
        }
        
        setTimeout(() => {
            line.classList.add('hack-line-visible');
            typeChar();
        }, 100);
    } else {
        setTimeout(showNextPrompt, 500);
    }
}

function showNextPrompt() {
    const hackLevels = getCurrentHackLevels();
    if (currentLevel < hackLevels.length) {
        const promptDiv = document.getElementById('hackPrompt');
        promptDiv.innerHTML = hackLevels[currentLevel].question + '<input type="text" class="hack-input" id="hackInput" maxlength="4" onkeypress="handleHackInput(event)" style="width:80px">';
        promptDiv.style.display = 'block';
        document.getElementById('hackInput').focus();
    }
}

function handleHackInput(event) {
    if (event.key === 'Enter') {
        const input = event.target.value;
        const hackLevels = getCurrentHackLevels();
        const currentQuestion = hackLevels[currentLevel];
        if (input === currentQuestion.answer) {
            currentLevel++;
            if (currentLevel < hackLevels.length) {
                document.getElementById('hackPrompt').style.display = 'none';
                startHackingSequence();
            } else {
                document.getElementById('hackingPage').style.display = 'none';
                const terminal = document.querySelector('.terminal-content');
                let codeNumber = '(1) - 2070';
                if (currentUser === 'user2') codeNumber = '(2) - 1073';
                if (currentUser === 'user3') codeNumber = '(3) - 2372';
                if (currentUser === 'user4') codeNumber = '(4) - 6214';
                terminal.innerHTML = '<div class="section-header">► ALL LEVELS COMPLETED</div><div style="padding:40px; text-align:center; font-size:18px;">System fully compromised.<br><br>CODE OBTAINED: ' + codeNumber + '<br><br><button class="login-submit" onclick="showHighCouncilLogin()" style="width:auto; padding:15px 30px; display:inline-block;">PROCEED TO HIGH COUNCIL ACCESS</button><br><br><button class="back-btn" onclick="goBack()">← BACK TO TERMINAL</button></div>';
                terminal.style.display = 'block';
            }
        } else {
            event.target.value = '';
        }
    }
}

function toggleCipher() {
    const modal = document.getElementById('cipherModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function caesarShift(text, shift) {
    return text.replace(/[a-zA-Z]/g, function(char) {
        const start = char <= 'Z' ? 65 : 97;
        return String.fromCharCode(((char.charCodeAt(0) - start + shift + 26) % 26) + start);
    });
}

function caesarEncode() {
    const input = document.getElementById('cipherInput').value;
    const output = caesarShift(input, 8);
    document.getElementById('cipherOutput').value = output;
}

function caesarDecode() {
    const input = document.getElementById('cipherInput').value;
    const output = caesarShift(input, -8);
    document.getElementById('cipherOutput').value = output;
}

function showHighCouncilLogin() {
    document.getElementById('loginPage').style.display = 'none';
    const terminal = document.querySelector('.terminal-content');
    terminal.innerHTML = '<div class="section-header">► HIGH COUNCIL ACCESS</div><div class="login-form" style="max-width:400px; margin:50px auto;"><input type="text" class="login-input" value="HIGHCOUNCIL" readonly><input type="text" class="login-input" value="PURIFICATION" readonly><button class="login-submit" onclick="showMasterCodeInput()">LOG IN</button><button class="back-btn" onclick="goBack()">← BACK TO TERMINAL</button></div>';
    terminal.style.display = 'block';
}

let masterNarrativeStep = 0;

const masterNarrativeSequence = [
    {
        text: 'HIGH COUNCIL MASTER OVERRIDE INITIATED...\nALL SUBSYSTEMS CONVERGING...\nTOTAL AUTHORITY TRANSFER IN PROGRESS...\n\nYou have accessed SUPREME COMMAND.\nDo you accept total dominion over the Harmonized Union? [Y/N]',
        prompt: 'Do you accept total dominion over the Harmonized Union? [Y/N]'
    },
    {
        text: 'CONSCIOUSNESS NETWORK INTEGRATION COMPLETE...\nTen million minds pulse through your awareness. Every thought filtered through \nyour will, every emotion shaped by your design. You are the god-emperor of \nhuman consciousness, puppet master of reality itself.\n\nDo you accept responsibility for every manufactured smile, every artificial tear? [Y/N]',
        prompt: 'Do you accept responsibility for every manufactured smile, every artificial tear? [Y/N]'
    },
    {
        text: 'SURVEILLANCE OMNIPRESENCE ACTIVATED...\nThrough a billion electronic eyes, you witness everything. Every whispered \nbetrayal, every moment of genuine joy crushed beneath your boot, every child \nraised never knowing authentic emotion. Privacy dies with your ascension.\n\nDo you accept responsibility for every violation, every stolen moment of humanity? [Y/N]',
        prompt: 'Do you accept responsibility for every violation, every stolen moment of humanity? [Y/N]'
    },
    {
        text: 'PROPAGANDA REALITY ENGINE ENGAGED...\nTruth is now your plaything. History rewrites itself at your command. Love, \nhate, memory, identity - all malleable clay in your hands. You can make them \nworship their own genocide and thank you for the privilege.\n\nDo you accept responsibility for the murder of objective reality itself? [Y/N]',
        prompt: 'Do you accept responsibility for the murder of objective reality itself? [Y/N]'
    },
    {
        text: 'PUNISHMENT PROTOCOLS FULLY INTEGRATED...\nThe screams from Purification Chambers become your lullabies. The Void tanks \nyour instruments of perfect silence. Every execution carried out in your name, \nevery mind broken for your peace. You are architect of humanity\'s suffering.\n\nDo you accept responsibility for every shattered soul, every destroyed life? [Y/N]',
        prompt: 'Do you accept responsibility for every shattered soul, every destroyed life? [Y/N]'
    },
    {
        text: 'FINAL AUTHORITY CONFIRMATION REQUIRED...\n\nYou hold ten million lives in your hands. Every death that follows will be your decision.\nEvery child who never knows true freedom will be your legacy.\nEvery moment of authentic human experience you deny will echo through eternity.\n\nTHE UNION\'S FATE RESTS IN YOUR HANDS.\nTHE RESPONSIBILITY IS ABSOLUTE.\nTHE POWER IS COMPLETE.\nTHE CONSEQUENCES ARE ETERNAL.\n\nDo you accept full and total responsibility for all that was, is, and will be? [Y/N]',
        prompt: 'Do you accept full and total responsibility for all that was, is, and will be? [Y/N]'
    },
    {
        text: '═══════════════════════════════════════════\nWARNING: THIS CHOICE CANNOT BE UNDONE\nWARNING: FULL MORAL CULPABILITY TRANSFERS\nWARNING: YOU BECOME WHAT YOU SOUGHT TO DESTROY\n═══════════════════════════════════════════\n\nThe numbers burn in your mind. The culmination of everything.\nThe final lock on humanity\'s cage.\nOr perhaps... the key to their freedom?\n\nThe choice is yours alone.',
        autoAdvance: true
    }
];

function showMasterCodeInput() {
    document.querySelector('.terminal-content').style.display = 'none';
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('hackingPage').style.display = 'block';
    document.getElementById('hackOutput').innerHTML = '';
    document.getElementById('hackPrompt').style.display = 'none';
    masterNarrativeStep = 0;
    showMasterNarrativeStep();
}

function showMasterNarrativeStep() {
    if (masterNarrativeStep < masterNarrativeSequence.length) {
        const output = document.getElementById('hackOutput');
        const narrative = masterNarrativeSequence[masterNarrativeStep];
        
        const textDiv = document.createElement('div');
        textDiv.style.cssText = 'color: #00ff41; margin-bottom: 20px; line-height: 1.4; white-space: pre-line; font-size: 16px;';
        output.appendChild(textDiv);
        
        let charIndex = 0;
        function typeChar() {
            if (charIndex < narrative.text.length) {
                textDiv.textContent = narrative.text.substring(0, charIndex + 1);
                charIndex++;
                document.getElementById('hackingPage').scrollTop = document.getElementById('hackingPage').scrollHeight;
                setTimeout(typeChar, 30);
            } else {
                if (narrative.autoAdvance) {
                    setTimeout(() => {
                        masterNarrativeStep++;
                        showMasterNarrativeStep();
                    }, 2000);
                } else {
                    const promptDiv = document.getElementById('hackPrompt');
                    promptDiv.innerHTML = '<span style="color:#00ff41;">></span> <input type="text" class="hack-input" id="masterNarrativeInput" maxlength="1" onkeypress="handleMasterNarrativeInput(event)" style="width:30px" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
                    promptDiv.style.display = 'block';
                    setTimeout(() => {
                        const input = document.getElementById('masterNarrativeInput');
                        input.focus();
                        input.click();
                    }, 100);
                }
                document.getElementById('hackingPage').scrollTop = document.getElementById('hackingPage').scrollHeight;
            }
        }
        typeChar();
    } else {
        document.getElementById('hackPrompt').style.display = 'none';
        const countdownDiv = document.createElement('div');
        countdownDiv.style.cssText = 'margin-top: 30px; font-size: 24px; color: #ffff00; text-align: center;';
        document.getElementById('hackOutput').appendChild(countdownDiv);
        
        let countdown = 5;
        countdownDiv.textContent = `${countdown}`;
        document.getElementById('hackingPage').scrollTop = document.getElementById('hackingPage').scrollHeight;
        
        const countdownInterval = setInterval(() => {
            countdown--;
            if (countdown > 0) {
                countdownDiv.textContent = `${countdown}`;
            } else {
                clearInterval(countdownInterval);
                showMasterCodePage();
            }
        }, 1000);
    }
}

function showMasterCodePage() {
    const terminal = document.querySelector('.terminal-content');
    terminal.innerHTML = '<div class="section-header" style="font-size:24px;">► MASTER CODE REQUIRED</div><div class="login-form" style="max-width:600px; margin:50px auto;"><div style="color:#ffff00; margin:30px 0; font-size:18px; line-height:1.6;">Enter 4-part master code (format: code-code-code-code):</div><input type="text" class="login-input" id="masterCode" placeholder="XXXX-XXXX-XXXX-XXXX" style="font-size:16px; padding:20px;"><button class="login-submit" onclick="checkMasterCode()" style="font-size:16px; padding:20px;">SUBMIT MASTER CODE</button></div>';
    terminal.style.display = 'block';
    document.getElementById('hackingPage').style.display = 'none';
    document.getElementById('masterCode').focus();
}

function handleMasterNarrativeInput(event) {
    if (event.key === 'Enter') {
        const input = event.target.value.toLowerCase();
        if (input === 'y') {
            masterNarrativeStep++;
            document.getElementById('hackPrompt').style.display = 'none';
            setTimeout(showMasterNarrativeStep, 500);
        } else if (input === 'n') {
            document.getElementById('hackPrompt').style.display = 'none';
            const output = document.getElementById('hackOutput');
            output.innerHTML = '';
            const exitDiv = document.createElement('div');
            exitDiv.style.cssText = 'color:#ff4444; font-size:24px; text-align:center; margin-top:50px; line-height:1.5;';
            output.appendChild(exitDiv);
            const exitText = 'PLEASE EXIT THE PLATFORM\nPLEASE EXIT THE PLATFORM\nPLEASE EXIT THE PLATFORM';
            let charIndex = 0;
            function typeExit() {
                if (charIndex < exitText.length) {
                    exitDiv.innerHTML = exitText.substring(0, charIndex + 1).replace(/\n/g, '<br>');
                    charIndex++;
                    setTimeout(typeExit, 50);
                } else {
                    setTimeout(goBack, 2000);
                }
            }
            typeExit();
        } else if (input === '§') {
            document.getElementById('hackPrompt').style.display = 'none';
            showMasterCodePage();
        } else {
            event.target.value = '';
        }
    }
}

function checkMasterCode() {
    const code = document.getElementById('masterCode').value;
    if (code === '2070-1073-2372-6214') {
        document.getElementById('hackingPage').style.display = 'none';
        const terminal = document.querySelector('.terminal-content');
        terminal.innerHTML = '<div class="section-header">► SYSTEM SHUTDOWN INITIATED</div><div id="shutdownContent" style="padding:40px; text-align:center; font-size:18px; color:#ff4444;"></div>';
        terminal.style.display = 'block';
        startShutdownSequence();
    } else {
        document.getElementById('masterCode').value = '';
    }
}

function startShutdownSequence() {
    const shutdownLines = [
        { text: 'ALL SYSTEMS SUCCESSFULLY SHUT DOWN', style: 'font-weight:bold;' },
        { text: '', style: '' },
        { text: 'BMI protocols: DISABLED', style: '', highlight: 'DISABLED' },
        { text: 'Defence protocols: DISABLED', style: '', highlight: 'DISABLED' },
        { text: 'All locked doors: OPENED', style: '', highlight: 'OPENED' },
        { text: '', style: '' },
        { text: 'The Union has fallen.', style: 'color:#ffff00;' },
        { text: '', style: '' },
        { text: 'Please exit the platform', style: 'color:#ff6666;' },
        { text: 'Please exit the platform', style: 'color:#ff6666;' },
        { text: 'Please exit the platform', style: 'color:#ff6666;' }
    ];
    
    const content = document.getElementById('shutdownContent');
    let lineIndex = 0;
    
    function typeNextLine() {
        if (lineIndex < shutdownLines.length) {
            const currentLine = shutdownLines[lineIndex];
            const lineDiv = document.createElement('div');
            lineDiv.style.marginBottom = '10px';
            lineDiv.style.cssText += currentLine.style;
            content.appendChild(lineDiv);
            
            if (currentLine.text === '') {
                lineIndex++;
                setTimeout(typeNextLine, 200);
                return;
            }
            
            let charIndex = 0;
            function typeChar() {
                if (charIndex < currentLine.text.length) {
                    let displayText = currentLine.text.substring(0, charIndex + 1);
                    
                    if (currentLine.highlight) {
                        displayText = displayText.replace(currentLine.highlight, '<span style="color:#00ff41;">' + currentLine.highlight + '</span>');
                    }
                    
                    lineDiv.innerHTML = displayText;
                    charIndex++;
                    setTimeout(typeChar, 50);
                } else {
                    lineIndex++;
                    setTimeout(typeNextLine, 400);
                }
            }
            typeChar();
        } else {
            setTimeout(() => {
                goBack();
            }, 5000);
        }
    }
    
    typeNextLine();
}

function handleNarrativeInput(event) {
    if (event.key === 'Enter') {
        const input = event.target.value.toLowerCase();
        if (input === 'y') {
            narrativeStep++;
            document.getElementById('hackPrompt').style.display = 'none';
            setTimeout(showNarrativeStep, 500);
        } else if (input === 'n') {
            document.getElementById('hackPrompt').style.display = 'none';
            const output = document.getElementById('hackOutput');
            output.innerHTML = '';
            const exitDiv = document.createElement('div');
            exitDiv.style.cssText = 'color:#ff4444; font-size:24px; text-align:center; margin-top:50px; line-height:1.5;';
            output.appendChild(exitDiv);
            const exitText = 'PLEASE EXIT THE PLATFORM\nPLEASE EXIT THE PLATFORM\nPLEASE EXIT THE PLATFORM';
            let charIndex = 0;
            function typeExit() {
                if (charIndex < exitText.length) {
                    exitDiv.innerHTML = exitText.substring(0, charIndex + 1).replace(/\n/g, '<br>');
                    charIndex++;
                    setTimeout(typeExit, 50);
                } else {
                    setTimeout(goBack, 2000);
                }
            }
            typeExit();
        } else if (input === '§') {
            document.getElementById('hackPrompt').style.display = 'none';
            document.getElementById('hackOutput').innerHTML = '';
            startHackingSequence();
        } else {
            event.target.value = '';
        }
    }
}

function goBack() {
    document.getElementById('hackingPage').style.display = 'none';
    document.getElementById('hackOutput').innerHTML = '';
    document.getElementById('hackPrompt').style.display = 'none';
    const terminal = document.querySelector('.terminal-content');
    terminal.innerHTML = '<div class="boot-text"><div class="boot-line">[SYSTEM] Initializing secure connection...</div><div class="boot-line">[SYSTEM] Encryption protocols loaded: AES-256, RSA-4096</div><div class="boot-line">[SYSTEM] Firewall status: ACTIVE</div><div class="boot-line">[SYSTEM] Intrusion detection: ENABLED</div><div class="boot-line">[SYSTEM] Security clearance required for access</div><div class="boot-line">[SYSTEM] Terminal ready <span class="cursor">█</span></div></div><div class="login-section"><div class="section-header">► AUTHORIZED USER ACCOUNTS</div><div class="login-grid"><button class="login-btn" onclick="accessLogin(\'locke\')"><strong>LOCKE</strong><br>Security Level: ALPHA<br>Status: ONLINE</button><button class="login-btn" onclick="accessLogin(\'user2\')"><strong>COUNCIL</strong><br>Security Level: BETA<br>Status: ONLINE</button><button class="login-btn" onclick="accessLogin(\'user3\')"><strong>ARISTOCRAT</strong><br>Security Level: GAMMA<br>Status: ACTIVE</button><button class="login-btn" onclick="accessLogin(\'user4\')"><strong>AWAKE</strong><br>Security Level: DELTA<br>Status: ACTIVE</button></div></div><div class="system-info"><div class="section-header">► SYSTEM INFORMATION</div><div class="info-line">Server: CLASSIFIED-NODE-7</div><div class="info-line">Network: 192.168.xxx.xxx</div><div class="info-line">Uptime: 847:23:17</div><div class="info-line">Active connections: 4</div><div class="info-line">Last breach attempt: 00:00:00 ago</div></div>';
    terminal.style.display = 'block';
    document.getElementById('loginPage').style.display = 'none';
    currentLevel = 0;
    narrativeStep = 0;
}

document.addEventListener('DOMContentLoaded', function() {
    createMatrixRain();
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const passwordInput = document.getElementById('password');
            const masterCodeInput = document.getElementById('masterCode');
            
            if (passwordInput && passwordInput === document.activeElement) {
                authenticate();
            } else if (masterCodeInput && masterCodeInput === document.activeElement) {
                checkMasterCode();
            }
        }
    });
    
    setInterval(() => {
        const matrixBg = document.getElementById('matrixBg');
        const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ!@#$%^&*()_+-=[]{}|;:,.<>?~`';
        
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = Math.random() * 100 + '%';
        column.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        let columnText = '';
        for (let j = 0; j < 25; j++) {
            let char = characters[Math.floor(Math.random() * characters.length)];
            if (Math.random() < 0.1) {
                char = '<span style="color:#ff0040;text-shadow:0 0 3px #ff0040;">' + char + '</span>';
            }
            columnText += char + '<br>';
        }
        column.innerHTML = columnText;
        
        matrixBg.appendChild(column);
        
        setTimeout(() => {
            column.remove();
        }, 5000);
    }, 400);
    
    setInterval(() => {
        if (Math.random() < 0.02) {
            document.body.style.filter = 'brightness(0.95) contrast(1.1)';
            setTimeout(() => {
                document.body.style.filter = '';
            }, 50);
        }
    }, 300);
    
    setInterval(createGlitchEffect, 400);
    setInterval(addRandomGlitchLines, 600);
    setInterval(addRandomCodes, 600);
    setInterval(screenDistortion, 4000);
    setInterval(terminalCorruption, 5000);
});

function createGlitchEffect() {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ01234567890';
    const terminal = document.querySelector('.terminal-content');
    if (!terminal) return;
    
    const textElements = terminal.querySelectorAll('.boot-text div');
    textElements.forEach(el => {
        if (Math.random() < 0.15 && el.textContent.length > 3 && !el.closest('.login-page')) {
            const originalText = el.textContent;
            const originalHTML = el.innerHTML;
            let corruptedText = originalText;
            
            for (let i = 0; i < 5; i++) {
                const pos = Math.floor(Math.random() * corruptedText.length);
                corruptedText = corruptedText.substring(0, pos) + glitchChars[Math.floor(Math.random() * glitchChars.length)] + corruptedText.substring(pos + 1);
            }
            
            el.innerHTML = '<span style="color:#ff0040;text-shadow:0 0 5px #ff0040;animation:text-corruption 0.2s infinite;">' + corruptedText + '</span>';
            el.style.animation = 'glitch-shake 0.1s infinite';
            
            setTimeout(() => {
                el.innerHTML = originalHTML;
                el.style.animation = '';
            }, 150 + Math.random() * 300);
        }
    });
}

function addRandomGlitchLines() {
    const terminal = document.querySelector('.terminal-content');
    if (!terminal || Math.random() > 0.15) return;
    
    const glitchMessages = [
        '[ERROR] ﾒﾓﾘｰ ｵｰﾊﾞｰﾌﾛｰ 0x7FF8A2B1',
        '[BREACH] ｼｽﾃﾑ ｱｸｾｽ ｹﾝｼｭﾂ',
        '[エラー] システムハック 0xDEADBEEF',
        '[アラート] セキュリティ違反 0x1337C0DE',
        '[CORRUPT] ﾃﾞｰﾀ ｺﾗﾌﾟｼｮﾝ 0xBADC0FFE',
        '[ハック] ネットワーク侵入 0xFEEDFACE',
        '[INJECT] ﾏﾙｳｪｱ ｲﾝｼﾞｪｸｼｮﾝ',
        '[ウイルス] マルウェア検出 0xCAFEBABE',
        '[EXPLOIT] ゼロデイ攻撃 0x8BADF00D',
        '[システム] ルートキット 0xDEADC0DE',
        '[OVERRIDE] ｼｽﾃﾑ ｵｰﾊﾞｰﾗｲﾄﾞ',
        '[データ] メモリリーク 0xB16B00B5',
        '[TRACE] バックドア検出 0xABCDEF01',
        '[エラー] ファイル破損 0x12345678',
        '[BREACH] ファイアウォール突破 0x87654321'
    ];
    
    const glitchDiv = document.createElement('div');
    glitchDiv.style.cssText = 'position:fixed;top:' + Math.random() * 80 + '%;left:' + Math.random() * 80 + '%;color:#ff0040;font-size:12px;z-index:1000;pointer-events:none;text-shadow:0 0 8px #ff0040;animation:glitch-shake 0.1s infinite;';
    glitchDiv.textContent = glitchMessages[Math.floor(Math.random() * glitchMessages.length)];
    document.body.appendChild(glitchDiv);
    
    setTimeout(() => {
        glitchDiv.remove();
    }, 600 + Math.random() * 1000);
}

function screenDistortion() {
    if (Math.random() < 0.03) {
        document.body.style.filter = 'brightness(1.1) contrast(1.2)';
        setTimeout(() => {
            document.body.style.filter = '';
        }, 50);
    }
}

function terminalCorruption() {
    const terminal = document.querySelector('.terminal');
    if (!terminal || Math.random() > 0.05) return;
    
    const scanLine = document.createElement('div');
    scanLine.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,transparent,rgba(0,255,65,0.8),transparent);z-index:9999;pointer-events:none;box-shadow:0 0 10px #00ff41;';
    document.body.appendChild(scanLine);
    
    let pos = 0;
    const moveScanLine = () => {
        scanLine.style.top = pos + 'px';
        pos += 4;
        if (pos < window.innerHeight) {
            requestAnimationFrame(moveScanLine);
        } else {
            scanLine.remove();
        }
    };
    moveScanLine();
}

function addRandomCodes() {
    if (Math.random() > 0.1) return;
    
    const codes = [
        '0x' + Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase().padStart(6, '0'),
        'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'.charAt(Math.floor(Math.random() * 46)) + 
        'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'.charAt(Math.floor(Math.random() * 46)) + 
        'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'.charAt(Math.floor(Math.random() * 46)),
        Math.floor(Math.random() * 9999).toString().padStart(4, '0'),
        String.fromCharCode(0xFF01 + Math.floor(Math.random() * 94)),
        'ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷ'.charAt(Math.floor(Math.random() * 23)) + 
        'ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷ'.charAt(Math.floor(Math.random() * 23))
    ];
    
    const codeDiv = document.createElement('div');
    codeDiv.style.cssText = 'position:fixed;top:' + Math.random() * 90 + '%;left:' + Math.random() * 90 + '%;color:#00ff41;font-size:10px;z-index:999;pointer-events:none;opacity:0.7;';
    codeDiv.textContent = codes[Math.floor(Math.random() * codes.length)];
    document.body.appendChild(codeDiv);
    
    setTimeout(() => {
        codeDiv.remove();
    }, 300 + Math.random() * 500);
}