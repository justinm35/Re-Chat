import { string } from "zod";
import { Icon } from "../components/Icons";

interface SidebarOption {
    id: number
    name: string
    href: string
    Icon: Icon
}