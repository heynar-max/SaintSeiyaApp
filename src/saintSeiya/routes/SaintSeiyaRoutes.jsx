import { Navigate, Route, Routes } from "react-router-dom"
import { BronzeSaintPage, GoldSaintPage, HomePage, SaintPage, SearchPage } from "../pages"
import { Navbar } from "../../ui/components/Navbar"







const SaintSeiyaRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className="router_container">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="bronze" element={<BronzeSaintPage/>}/>
                    <Route path="gold" element={<GoldSaintPage/>}/>
                    <Route path="search" element={<SearchPage/>}/>
                    <Route path="saint" element={<SaintPage/>}/>


                    <Route path="/" element={<Navigate to="/"/>}/>
                </Routes>
            </div>
        </>
    )
}

export default SaintSeiyaRoutes