// import Button from "../Format_Components/Button";
import download from "../../assets/icons/discord.png";
import { useState } from "react"
import { Button, Modal, Drawer, Radio, Space } from 'antd'
import ContactMePage from "./ContactMePage";

export default function HomePage() {
    const [open, setOpen] = useState(false);

    return (
        <div className="home-container">
            <h2 className="introHeading">Welcome To My Site. Learn more about me as <br /> a person and a Developer</h2>
            <a href="User_Guide_2026.pdf" download="User_Guide_2026.pdf"><img src="download.png" alt="Download Guide" /></a>
            <Button type="link" href="/portfolio">Portfolio</Button>
            <Button type="primary" onClick={() => setOpen(true)}>
                Open Drawer
            </Button>
            <Drawer
                title="Resizable Drawer"
                placement={'right'}
                onClose={() => setOpen(false)}
                open={open}
                key={"right"}
                size={"500"}
            >
                <ContactMePage />
            </Drawer>
        </div>
    );
}