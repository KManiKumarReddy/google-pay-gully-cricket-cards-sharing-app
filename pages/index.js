import { useState, useEffect } from "react";
import { atcb_init } from 'add-to-calendar-button'

import CardsList from "../components/CardsList"

const mobileCheck = () => {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

function AddToCalendarButton() {
    useEffect(atcb_init, [])
    const date = new Date()
    if (date.getUTCHours() > 3)
        date.setTime(date.getTime() + 24 * 60 * 60 * 1000)
    return (
        <div className='atcb' style={{ display: 'none' }}>
            {JSON.stringify({
                name: "GPay Gully Cricket Cards Giveaway",
                location: "https://gpay-gully-cricket.kmanikumarreddy.com/",
                startDate: date.toISOString().substring(0, 10),
                endDate: date.toISOString().substring(0, 10),
                startTime: "08:59",
                endTime: "09:05",
                options: ['Apple', 'Google', 'iCal', 'Microsoft365', 'Outlook.com', 'MicrosoftTeams', 'Yahoo'],
                trigger: "click",
                timeZone: "Asia/Calcutta",
                iCalFileName: "gpay_giveaway",
            })}
        </div>
    );
}

function HomePage() {

    const [isMobile, setIsMobile] = useState(true)

    useEffect(() => {
        setIsMobile(mobileCheck())
    }, [])

    if (!isMobile) {
        return <div className="bg-black text-white flex-col flex items-center gap-5 justify-center min-h-screen">
            <p className="text-5xl">Please use mobile device only</p>
            <button className="rounded-xl px-4 align-middle bg-gray-400 p-2 text-2xl " onClick={() => window.location.reload()}>Refresh</button>
        </div>
    }

    return <div className="container p-5 text-center mx-auto bg-gradient-to-r from-orange-400 to-rose-400 text-indigo-800">
        <h3 className="uppercase font-bold">New cards every morning 9AM</h3>
        <h3>also at 9PM (if cards available)</h3>
        <AddToCalendarButton />
        <h4 className="animate-pulse">200+ cards distributed everyday</h4>
        <h4 className="animate-pulse">Toofan, Rocket claimed in seconds!</h4>
        <CardsList />
        <p className="text-md">Send your extra cards to get new cards (daily 3) 👇 </p>
        <p className="text-sm">PS: Feel free to gift more and help others</p>
        <a href="https://gpay.app.goo.gl/ZyUD33">
            <button className="rounded-full bg-white text-orange-400 text-center py-1 px-16 mt-2 animate-bounce font-bold">
                Gift
            </button>
        </a>
    </div >
}

export default HomePage

