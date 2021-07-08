import Anchor from "../../atoms/anchor/Anchor";
import FooterNav from "../../molecules/navbar/FooterNav";
import SearchForm from "../../molecules/searchform/SearchForm";
import EmptyLine from "../../molecules/line/EmptyLine";

export default function Footer() {
    return (
        <>
            <br />
            <EmptyLine bgcolor="#ff6600" />
            <br />
            <center>
                <Anchor url="https://blog.ycombinator.com/early-deadline-for-yc-winter-2022/">
                    Apply early for the YC Winter 2022 batch
                </Anchor>
                <br />
                <br />
                <FooterNav />
                <br />
                <br />
                <SearchForm formClass="margin-block-end-1em" />
            </center>
        </>
    )
}