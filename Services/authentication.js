const NJMLS_LOGIN_URL = "https://njmls.xmlsweb.com/Login_back.asp";

async function authentication({userid, pw, page}) {
    console.log(`\n############################# Logging into www.newjerseymls.com #############################\n`);
    await page.goto(NJMLS_LOGIN_URL);

    // Login
    await page.type('#MemberId', userid);
    await page.type('#MemberPassword', pw);
    await page.click('#submit1');
    if(page.url() == "https://njmls.xmlsweb.com/newdesktop/default.asp") {
        console.log(`------------------------- Authentication Successed, Navigating to ${page.url()} -------------------------\n`)
    } else {
        console.log(`------------------------- Authentication Failed, Navigating to ${page.url()} -------------------------\n`)
    }
    return page
}

module.exports = { authentication };
