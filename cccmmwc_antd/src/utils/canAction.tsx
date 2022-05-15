import _ from "underscore";
import { decryptDataToString } from "./encrypto";

export default (action: string, pathname: string) => {
    const groups = JSON.parse(localStorage.getItem("groups")!)
    const access = JSON.parse(decryptDataToString(localStorage.getItem("access")))
    const currentAccess = _.find(access, (a) => {
        return a.menu.link = pathname
    })
    return currentAccess.access[action].some((r: any) => groups.indexOf(r) >= 0);
}