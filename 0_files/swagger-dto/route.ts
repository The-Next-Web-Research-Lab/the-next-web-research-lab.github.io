import { CommonProps, CommonName } from "./common";

export interface Props extends CommonProps {
    url: string;
    name: CommonName
}