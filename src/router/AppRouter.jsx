import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../saintSeiya/pages/HomePage"
import { Navbar } from "../ui/components/Navbar"
import BronzeSaintPage from "../saintSeiya/pages/BronzeSaintPage"
import GoldSaintPage from "../saintSeiya/pages/GoldSaintPage"


const AppRouter = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="bronze" element={<BronzeSaintPage/>}/>
                <Route path="gold" element={<GoldSaintPage/>}/>


                <Route path="/*" element={<Navigate to="/"/>}/>
            </Routes>
        </>
    )
}

export default AppRouter