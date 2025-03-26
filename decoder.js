// THIS CODE IS HORRIBLE, I APOLOGIZE TO ANYBODY READING THIS :skull:
// :3




const axios = require('axios');
const fs = require("fs");
const {
    v4: uuidv4,
} = require('uuid');

let meow = fs.readFileSync("cracking/antilog.txt").toString();

console.time('Audio decoded in');

let useFirst = false
let useLastOverride = false
let forceNoUaid = false
let forceNoAvid = false
let uaid = false
let avid = false

let confidence = 99

if (meow.includes("\n")) {
    useFirst = true
    confidence += 40
}
// TODO: Remove this when I fix + parsing
if (meow.includes("+") || meow.includes("%2B") || meow.includes("%2b")) {
    confidence -= 65
}

let alType = ""

if (meow.endsWith(" ")) {
    alType = "._"
}

meow = meow.replace(/ /gim, "")
let args
args = process.argv.slice(2)
if (args[0] !== "uwu") {
    if (meow.match(/&assetname=\[<._Anti-LoggerbyRiptxdeanddot_mp4><discord.gg\//gm) && meow.match(/e-/gm) && meow.match(/\?%25/gm)) {
        alType += "._"
        confidence += 20
    }
    if (meow.match(/=AntiloggerbyKaid!!!!!\|discord\.gg\/hatsune\|Whatanewgen,triedtolog\{/gm) && meow.match(/%00%%L3/gm) && meow.match(/%%26/gm)) {
        console.log("Kaid")
        alType = "Kaid"
        confidence -= 30
    }
    if (alType === "Kaid") {
        fs.writeFileSync('cracking/result.txt', 'Sorry, "Kaid" antilog is whitelisted!!')
        return
    }
}

const randplushaha = ("KAID"+uuidv4()+uuidv4()).replace(/-|\d/gi,"");

meow = meow.replace(/%0A/gim,"")
meow = meow.replace(/%26|%3D/gim,"%50")
meow = meow.replace(/%00/gim, "%KAIDFOUNDTHISWEIRDBUG")
meow = meow.replace(/%[^&=]%|%%/gim,"%L1")
meow = meow.replace(/%&/gim,"%L1&")
meow = meow.replace(/%=/gim,"%L1=")
meow = meow.replace(/%[^&=]&/gim,"%L1&")
meow = meow.replace(/%[^&=]=/gim,"%L1=")
meow = meow.replace(/%2B/gim,randplushaha)

if (meow.replace(/(â€|â€Ž|â€«|â€ª|%E2%80%AB|%E2%80%AA|%E2%80%8E|%E2%80%8F)|(â€Š|â€‰|â€ˆ|â€‡|â€†|â€…|â€„|â€ƒ|â€‚|â€|â€€)|(â€Š|â€‰|â€ˆ|â€‡|â€†|â€…|â€„|â€ƒ|â€‚|â€|â€€|%E2%80%8A|%E2%80%89|%E2%80%88|%E2%80%87|%E2%80%86|%E2%80%85|%E2%80%84|%E2%80%83|%E2%80%82|%E2%80%81|%E2%80%80)/gim,"") !== meow) {
    useFirst = true
}

if (meow.endsWith("&")){
    useFirst = true
    confidence += 5
}
if (meow.includes("&&")){
    useLastOverride = true
}

if (meow.startsWith("http://www.roblox.com/asset/?id=")) {
    meow = meow.substring(32)
    meow = "&id=" + meow
    confidence += 1
}else if (meow.startsWith("rbxassetid://")) {
    meow = meow.substring(13)
    meow = "&id=" + meow
    confidence -= 10
}else if (meow.startsWith("https://www.roblox.com/asset/?id=")) {
    meow = meow.substring(33)
    meow = "&id=" + meow
    confidence -= 4
}else{
    meow = "&id=" + meow
}

const queries = meow.split("&")
let decodedQueries = ""
for (const query of queries){
    let decodedQuery = ""
    for (let i = 0; i < query.length; i++) {
        if (query[i] === "%") {
            try{
                const uwu = decodeURIComponent(query[i] + query[i+1] + query[i+2])
                i+=2
                decodedQuery = decodedQuery + uwu
            }catch{
                decodedQuery = decodedQuery + query[i]
            }
        }else{
            decodedQuery = decodedQuery + query[i]
        }
    }
    decodedQuery = decodedQuery.replace(/(â€|â€Ž|â€«|â€ª|%E2%80%AB|%E2%80%AA|%E2%80%8E|%E2%80%8F)|^(â€Š|â€‰|â€ˆ|â€‡|â€†|â€…|â€„|â€ƒ|â€‚|â€|â€€)|(â€Š|â€‰|â€ˆ|â€‡|â€†|â€…|â€„|â€ƒ|â€‚|â€|â€€|%E2%80%8A|%E2%80%89|%E2%80%88|%E2%80%87|%E2%80%86|%E2%80%85|%E2%80%84|%E2%80%83|%E2%80%82|%E2%80%81|%E2%80%80)$/gim,"")
    decodedQuery = decodedQuery.replace(/=/g, (c, i, text) => text.indexOf(c) === i ? c : 'eq')
    if (decodedQuery !== "")
        decodedQueries = decodedQueries + "&" + decodedQuery
}
if (args[0] !== "uwu") {
    if (decodedQueries.replace(/(?=assetversionid=)(.*?)%1YassetversionidP0000/gim,"._WHITELISTSTRING58934985894664").includes("._WHITELISTSTRING58934985894664")){
        alType += "._"
        confidence += 20
    }
}

decodedQueries = decodedQueries + "&"
decodedQueries = decodedQueries.replace(/&assetname=%KAIDFOUNDTHISWEIRDBUG(.*)&/gim,"&")
let decodedQueriesCopy = decodedQueries

let decodedQueriesPlusCheck = decodedQueries.slice(0, -1).split("&")

for (const query of decodedQueriesPlusCheck) { //WIP
    if (/d/gim.test(query))
    console.log(query)
}

decodedQueries = decodedQueries.replace(/(%[^abcdef0123456789].*?(?=[&=]))|(%.[^abcdef0123456789].*?(?=[&=]))/gim,"")

// console.log(decodedQueries)

let decodedQueries2 = decodedQueries.slice(0, -1).split("&")

if (decodedQueries2.length < 80 || decodedQueries2.length > 190) {
    alType = ""
}

if (decodedQueries.includes("0x") || decodedQueries.includes("0X")) {
    confidence -= 20
}

let ucount = 0
let avcount = 0
let currUcount = 0
let currAvcount = 0

for (const query of decodedQueries2) {
    if (/^userassetid=/gim.test(query)){
        ucount++
        uaid = true
    }else if (/^assetversionid=/gim.test(query)){
        avcount++
        avid = true
    }
}

if (uaid){
    confidence -= 20
}
if (avid) {
    confidence += 10
}else {
    confidence -= 20
}

let diagnosis_insert = false
for (const query of decodedQueries2) {
    if (/^(placeid|assetname|id|userassetid|assetversionid|scriptinsert|clientinsert|version)=/gim.test(query)){
        if (/^assetname=/gim.test(query)){
            if (query === "assetname=") {
                useFirst = true
            }
        }
        if (/^version=/gim.test(query) || /^placeid=/gim.test(query)){
            if (isNaN(Number(query.slice(8))) || query === "placeid=" || query === "version=") {
                useFirst = true
            }
            diagnosis_insert = true
        }
        if (/^scriptinsert=/gim.test(query) || /^clientinsert=/gim.test(query)){
            if (isNaN(Number(query.slice(13))) || query === "scriptinsert=" || query === "clientinsert=" || Number(query.slice(13)) > 1) {
                useFirst = true
            }
            diagnosis_insert = true
        }
        if (/^userassetid=/gim.test(query)){
            currUcount++
            if (isNaN(Number(query.slice(12))) || query === "userassetid=") {
                useFirst = true
                if (currUcount === 1){
                    forceNoUaid = true
                }

                if (ucount <= 1) {
                    forceNoUaid = true
                }
            }
        }
        if (/^assetversionid=/gim.test(query)){
            currAvcount++
            if (isNaN(Number(query.slice(15))) || query === "assetversionid=") {
                useFirst = true
                if (currAvcount === 1){
                    forceNoAvid = true
                }

                if (avcount <= 1) {
                    forceNoAvid = true
                }
            }
        }
        if (/^id=/gim.test(query)){
            if (isNaN(Number(query.slice(3))) || query === "id=") {
                useFirst = true
            }
        }
    }else if (query.replace(" ","") !== "" && !(/^=/gim.test(query))) {
        useFirst = true
    }
}

if (diagnosis_insert) {
    confidence -= 9
}

let currUcount2 = 0
let currAvcount2 = 0

for (const query of decodedQueries2) {
    if (/^id=/gim.test(query)){
        if (query.slice(3).includes("x") || query.slice(3).includes("X")) {
            useFirst = true
        }
    }else if (/^clientinsert=/gim.test(query) || /^scriptinsert=/gim.test(query)) {
        if (query.slice(13).includes("x") || query.slice(13).includes("X")) {
            useFirst = true
        }
    }else if (/^placeid=/gim.test(query)){
        if (query.slice(8).includes("x") || query.slice(8).includes("X")) {
            useFirst = true
        }
    }else if (/^version=/gim.test(query)){
        if (query.slice(8).includes("x") || query.slice(8).includes("X")) {
            useFirst = true
        }
    }else if (/^userassetid=/gim.test(query)){
        if (query.slice(12).includes("x") || query.slice(12).includes("X")) {
            useFirst = true
            if (parseInt(query.slice(12)) >= 9223372036854776000 && (query.slice(12).toLowerCase() !== "0x7fffffffffffffff" || query.slice(12).toLowerCase() !== "0x0x7fffffffffffffff")) {
                forceNoUaid = true
                confidence -= 1
            }
        }
    }else if (/^assetversionid=/gim.test(query)){
        if (query.slice(15).includes("x") || query.slice(15).includes("X")) {
            useFirst = true
            if (parseInt(query.slice(15)) >= 9223372036854776000 && (query.slice(15).toLowerCase() !== "0x7fffffffffffffff" || query.slice(15).toLowerCase() !== "0x0x7fffffffffffffff")) {
                forceNoAvid = true
                confidence -= 1
            }
        }
    }
}
let uaid0 = false
let avid0 = false
for (let query of decodedQueries2) {
    if (/^userassetid=/gim.test(query)){
        currUcount2++
        query = query.replace(/0x0x/gim, "0x")
        if (!isNaN(Number(query.slice(12))) && query !== "userassetid=" && parseInt(query.slice(12)) === 0 && !(query.slice(12).includes("x") || query.slice(12).includes("X"))) {
            uaid0 = true
            if (useFirst && !useLastOverride && currUcount2 === 1) {
                forceNoUaid = true
            }
            if ((useLastOverride || !useFirst) && currUcount2 === ucount) {
                forceNoUaid = true
            }
        }
    }
    if (/^assetversionid=/gim.test(query)){
        currAvcount2++
        query = query.replace(/0x0x/gim, "0x")
        if (!isNaN(Number(query.slice(15))) && query !== "assetversionid=" && parseInt(query.slice(15)) === 0 && !(query.slice(15).includes("x") || query.slice(15).includes("X"))) {
            avid0 = true
            if (useFirst && !useLastOverride && currAvcount2 === 1) {
                forceNoAvid = true
            }
            if ((useLastOverride || !useFirst) && currAvcount2 === avcount) {
                forceNoAvid = true
            }
        }
    }
}

if (forceNoUaid) {
    confidence += 15
}
if (forceNoAvid) {
    confidence -= 10
}

if (useLastOverride) {
    confidence += 20
}else if (useFirst) {
    confidence += 10
}

if (confidence > 99) {
    confidence = 99
}else if (confidence < 20) {
    confidence = 20
}

let decodedQueries3 = ""
if (useFirst === true) {
    confidence -= 5
    uaid = false
    avid = false
    decodedQueries2 = decodedQueriesCopy.slice(0, -1).split("&")

    ucount = 0
    avcount = 0
    currUcount = 0
    currAvcount = 0

    for (const query of decodedQueries2) {
        if (/^userassetid=/gim.test(query)){
            ucount++
            uaid = true
            decodedQueries3 += "&" + query
        }else if (/^assetversionid=/gim.test(query)){
            avcount++
            avid = true
            decodedQueries3 += "&" + query
        }else if (/^id=/gim.test(query)){
            decodedQueries3 += "&" + query
        }
    }
    decodedQueries3 += "&"
    decodedQueries = decodedQueries3
    decodedQueries3 = decodedQueries3.slice(0, -1).split("&")

    for (let query of decodedQueries3) {
        query = query.replace(/(?<=assetversionid=)[\n]*([\n]*)?(?=[0-9])/gim,"")
        query = query.replace(/(?<=userassetid=)[\n]*([\n]*)?(?=[0-9])/gim,"")
        if (/^userassetid=/gim.test(query)){
            currUcount++
            if (isNaN(Number(query.slice(12))) || query === "userassetid=") {
                if (currUcount === 1){
                    forceNoUaid = true
                }

                if (ucount <= 1) {
                    forceNoUaid = true
                }
            }
        }
        if (/^assetversionid=/gim.test(query)){
            currAvcount++
            if (isNaN(Number(query.slice(15))) || query === "assetversionid=") {
                if (currAvcount === 1){
                    forceNoAvid = true
                }

                if (avcount <= 1) {
                    forceNoAvid = true
                }
            }
        }
    }

    currUcount2 = 0
    currAvcount2 = 0

    for (let query of decodedQueries3) {
        query = query.replace(/(?<=assetversionid=)[\n]*([\n]*)?(?=[0-9])/gim,"")
        query = query.replace(/(?<=userassetid=)[\n]*([\n]*)?(?=[0-9])/gim,"")
        if (/^userassetid=/gim.test(query)){
            if (query.slice(12).includes("x") || query.slice(12).includes("X")) {
                if (parseInt(query.slice(12)) >= 9223372036854776000 && (query.slice(12).toLowerCase() !== "0x7fffffffffffffff" || query.slice(12).toLowerCase() !== "0x0x7fffffffffffffff")) {
                    forceNoUaid = true
                }
            }
        }
        if (/^assetversionid=/gim.test(query)){
            if (query.slice(15).includes("x") || query.slice(15).includes("X")) {
                if (parseInt(query.slice(15)) >= 9223372036854776000 && (query.slice(15).toLowerCase() !== "0x7fffffffffffffff" || query.slice(15).toLowerCase() !== "0x0x7fffffffffffffff")) {
                    forceNoAvid = true
                }
            }
        }
    }

    for (let query of decodedQueries3) {
        query = query.replace(/(?<=assetversionid=)[\n]*([\n]*)?(?=[0-9])/gim,"")
        query = query.replace(/(?<=userassetid=)[\n]*([\n]*)?(?=[0-9])/gim,"")
        if (/^userassetid=/gim.test(query)){
            currUcount2++
            query = query.replace(/0x0x/gim, "0x")
            if (!isNaN(Number(query.slice(12))) && query !== "userassetid=" && parseInt(query.slice(12)) === 0 && !(query.slice(12).includes("x") || query.slice(12).includes("X"))) {
                if (useFirst && !useLastOverride && currUcount2 === 1) {
                    forceNoUaid = true
                }
                if ((useLastOverride || !useFirst) && currUcount2 === ucount) {
                    forceNoUaid = true
                }
            }
        }
        if (/^assetversionid=/gim.test(query)){
            currAvcount2++
            query = query.replace(/0x0x/gim, "0x")
            if (!isNaN(Number(query.slice(15))) && query !== "assetversionid=" && parseInt(query.slice(15)) === 0 && !(query.slice(15).includes("x") || query.slice(15).includes("X"))) {
                if (useFirst && !useLastOverride && currAvcount2 === 1) {
                    forceNoAvid = true
                }
                if ((useLastOverride || !useFirst) && currAvcount2 === avcount) {
                    forceNoAvid = true
                }
            }
        }
    }
}

// console.log(decodedQueries)
// console.log(uaid)
// console.log(avid)
// console.log(useFirst)

if (uaid === true && forceNoUaid === false) {
    if (useFirst === true && useLastOverride === false) {
        decodedQueries = decodedQueries.replace(/(?<=assetversionid=)[\n\r]*([\n\r]*)?(?=[0-9])/gim,"").replace(/(?<=userassetid=)[\n\r]*([\n\r]*)?(?=[0-9])/gim,"")
        axios.get(`https://assetdelivery.roblox.com/v1/asset?userAssetId=` + decodedQueries.match(/&userassetid=.*?&/im)[0].slice(13,-1),
            {
                maxRedirects: 0,
                validateStatus: function (status) {
                    return status == 302;
                },
                headers: {
                    'User-Agent': 'Roblox/WinInet',
                    'content-type': 'application/json',

                }})
            .then(response => {
                console.timeEnd('Audio decoded in')
                console.log(response.headers['roblox-assetid'])
                if (alType === "._._._" && uaid0 === true && avid0 === true) {
                    fs.writeFileSync('cracking/result.txt', 'Sorry, "._" antilog is whitelisted!!\n\nDecoder Confidence: ' + confidence.toString())
                }else {
                    fs.writeFileSync('cracking/result.txt', response.headers['roblox-assetid'] + " | Decoded Audio!\n\nDecoder Confidence: " + confidence.toString())
                }
            })
            .catch(function(e) {
                console.log("Could not decode audio.... (Audio private or failed to decode) :(");
                fs.writeFileSync('cracking/result.txt', "Could not decode audio.... (Audio private or failed to decode) :(")
            });
    }else if (useFirst === false || useLastOverride === true) {
        let theUaid = 0
        let qCount = 0
        for (const query of decodedQueries2){
            if (/^userassetid=/gim.test(query)) {
                theUaid = qCount
            }
            qCount++;
        }
        axios.get(`https://assetdelivery.roblox.com/v1/asset?userAssetId=` + decodedQueries2[theUaid].slice(12),
            {
                maxRedirects: 0,
                validateStatus: function (status) {
                    return status == 302;
                },
                headers: {
                    'User-Agent': 'Roblox/WinInet',
                    'content-type': 'application/json',

                }})
            .then(response => {
                console.timeEnd('Audio decoded in')
                console.log(response.headers['roblox-assetid'])
                if (alType === "._._._" && uaid0 === true && avid0 === true) {
                    fs.writeFileSync('cracking/result.txt', 'Sorry, "._" antilog is whitelisted!!\n\nDecoder Confidence: ' + confidence.toString())
                }else {
                    fs.writeFileSync('cracking/result.txt', response.headers['roblox-assetid'] + " | Decoded Audio!\n\nDecoder Confidence: " + confidence.toString())
                }
            })
            .catch(function(e) {
                console.log("Could not decode audio.... (Audio private or failed to decode) :(");
                fs.writeFileSync('cracking/result.txt', "Could not decode audio.... (Audio private or failed to decode) :(")
            });
    }
}
if (uaid === true && forceNoUaid === false) {return}
if (avid === true && forceNoAvid === false) {
    if (useFirst === true && useLastOverride === false) {
        decodedQueries = decodedQueries.replace(/(?<=assetversionid=)[\n\r]*([\n\r]*)?(?=[0-9])/gim,"").replace(/(?<=userassetid=)[\n\r]*([\n\r]*)?(?=[0-9])/gim,"")
        axios.get(`https://assetdelivery.roblox.com/v1/asset?assetVersionId=` + decodedQueries.match(/&assetversionid=.*?&/im)[0].slice(16,-1),
            {
                maxRedirects: 0,
                validateStatus: function (status) {
                    return status == 302;
                },
                headers: {
                    'User-Agent': 'Roblox/WinInet',
                    'content-type': 'application/json',

                }})
            .then(response => {
                console.timeEnd('Audio decoded in')
                console.log(response.headers['roblox-assetid'])
                if (alType === "._._._" && uaid0 === true && avid0 === true) {
                    fs.writeFileSync('cracking/result.txt', 'Sorry, "._" antilog is whitelisted!!\n\nDecoder Confidence: ' + confidence.toString())
                }else {
                    fs.writeFileSync('cracking/result.txt', response.headers['roblox-assetid'] + " | Decoded Audio!\n\nDecoder Confidence: " + confidence.toString())
                }
            })
            .catch(function(e) {
                console.log("Could not decode audio.... (Audio private or failed to decode) :(");
                fs.writeFileSync('cracking/result.txt', "Could not decode audio.... (Audio private or failed to decode) :(")
            });
    }else if (useFirst === false || useLastOverride === true) {
        let theAvid = 0
        let qCount = 0
        for (const query of decodedQueries2){
            if (/^assetversionid=/gim.test(query)) {
                theAvid = qCount
            }
            qCount++;
        }
        axios.get(`https://assetdelivery.roblox.com/v1/asset?assetVersionId=` + decodedQueries2[theAvid].slice(15),
            {
                maxRedirects: 0,
                validateStatus: function (status) {
                    return status == 302;
                },
                headers: {
                    'User-Agent': 'Roblox/WinInet',
                    'content-type': 'application/json',

                }})
            .then(response => {
                console.timeEnd('Audio decoded in')
                console.log(response.headers['roblox-assetid'])
                if (alType === "._._._" && uaid0 === true && avid0 === true) {
                    fs.writeFileSync('cracking/result.txt', 'Sorry, "._" antilog is whitelisted!!\n\nDecoder Confidence: ' + confidence.toString())
                }else {
                    fs.writeFileSync('cracking/result.txt', response.headers['roblox-assetid'] + " | Decoded Audio!\n\nDecoder Confidence: " + confidence.toString())
                }
            })
            .catch(function(e) {
                console.log("Could not decode audio.... (Audio private or failed to decode) :(");
                fs.writeFileSync('cracking/result.txt', "Could not decode audio.... (Audio private or failed to decode) :(")
            });
    }
}
if (avid === true && forceNoAvid === false) {return}
if (useFirst === true && useLastOverride === false) {
    decodedQueries = decodedQueries.replace(/(?<=id=)[\n\r]*([\n\r]*)?(?=[0-9])/gim,"")
    axios.get(`https://assetdelivery.roblox.com/v1/asset?id=` + decodedQueries.match(/&id=.*?&/im)[0].slice(4,-1),
        {
            maxRedirects: 0,
            validateStatus: function (status) {
                return status == 302;
            },
            headers: {
                'User-Agent': 'Roblox/WinInet',
                'content-type': 'application/json',

            }}) 
        .then(response => {
            console.timeEnd('Audio decoded in')
            console.log(response.headers['roblox-assetid'])
                if (alType === "._._._" && uaid0 === true && avid0 === true) {
                    fs.writeFileSync('cracking/result.txt', 'Sorry, "._" antilog is whitelisted!!\n\nDecoder Confidence: ' + confidence.toString())
                }else {
                    fs.writeFileSync('cracking/result.txt', response.headers['roblox-assetid'] + " | Decoded Audio!\n\nDecoder Confidence: " + confidence.toString())
                }
        })
        .catch(function(e) {
            console.log("Could not decode audio.... (Audio private or failed to decode) :(");
            fs.writeFileSync('cracking/result.txt', "Could not decode audio.... (Audio private or failed to decode) :(")
        });
}else if (useFirst === false || useLastOverride === true) {
    let theId = 0
    let qCount = 0
    for (const query of decodedQueries2){
        if (/^id=/gim.test(query)) {
            theId = qCount
        }
        qCount++;
    }
    axios.get(`https://assetdelivery.roblox.com/v1/asset?id=` + decodedQueries2[theId].slice(3),
        {
            maxRedirects: 0,
            validateStatus: function (status) {
                return status == 302;
            },
            headers: {
                'User-Agent': 'Roblox/WinInet',
                'content-type': 'application/json',

            }})
        .then(response => {
            console.timeEnd('Audio decoded in')
            console.log(response.headers['roblox-assetid'])
                if (alType === "._._._" && uaid0 === true && avid0 === true) {
                    fs.writeFileSync('cracking/result.txt', 'Sorry, "._" antilog is whitelisted!!\n\nDecoder Confidence: ' + confidence.toString())
                }else {
                    fs.writeFileSync('cracking/result.txt', response.headers['roblox-assetid'] + " | Decoded Audio!\n\nDecoder Confidence: " + confidence.toString())
                }
        })
        .catch(function(e) {
            console.log("Could not decode audio.... (Audio private or failed to decode) :(");
            fs.writeFileSync('cracking/result.txt', "Could not decode audio.... (Audio private or failed to decode) :(")
        });
}

/*console.log(useFirst)
console.log(useLastOverride)
console.log(avid)
console.log(uaid)
console.log(forceNoAvid)
console.log(forceNoUaid)*/




// uwu hi :3 x3 :p :D :) :33333