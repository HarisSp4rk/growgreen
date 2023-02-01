import NorthKarachi from '../../assets/ReportsAlert/NorthKarachi.svg'
import SiteArea from '../../assets/ReportsAlert/SiteArea.svg'
import Gulshan from '../../assets/ReportsAlert/Gulshan.svg'
import Sadar from '../../assets/ReportsAlert/Sadar.svg'
import Nazimabad from '../../assets/ReportsAlert/Nazimabad.svg'
import PowerHouse from '../../assets/ReportsAlert/PowerHouse.svg'
export const DangerAlertData = [
    {
        pic: NorthKarachi,
        Area:'North Karachi',
        percentage:85,
        correctness:74
        
    },
    {
        pic: SiteArea,
        Area:'Site Area',
        percentage:55,
        correctness:52
    },
    {
        pic: Gulshan,
        Area:'Gulshan',
        percentage:45,
        correctness:36
    },
]
export const SafeAlertData = [
    {
        pic: Sadar,
        Area:'Sadar',
        percentage:80,
        correctness:95
    },
    {
        pic: Nazimabad,
        Area:'Nazimabad',
        percentage:55,
        correctness:92
    },
    {
        pic: PowerHouse,
        Area:'Power House',
        percentage:45,
        correctness:89
    },

]