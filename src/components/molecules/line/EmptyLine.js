export default function EmptyLine(props) {
    return(
        <table width="100%" cellSpacing="0" cellPadding="1">
            <tbody>
                <tr><td bgcolor={props.bgcolor}></td></tr>
            </tbody>
        </table>
    )
}