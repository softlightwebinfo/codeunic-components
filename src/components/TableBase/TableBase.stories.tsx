// Generated with util/create-component.js
import React from "react";
import TableBase from "./TableBase";
import AvatarHeader from "../AvatarHeader/AvatarHeader";
import TitleSubtitleBase from "../TitleSubtitleBase/TitleSubtitleBase";
import Status from "../Status/Status";
import TextInfo from "../TextInfo/TextInfo";
import Button from "../Button/Button";
import Container from "../Container/Container";

export default {
    title: "Table/TableBase"
};

export const Default = () => <TableBase
    columns={[
        {
            key: "id",
            text: "ID"
        },
        {
            key: "name",
            text: "Name"
        }
    ]}
    rows={[...new Array(10)].map((item, index) => ({
        id: index.toString(),
        name: `Name ${++index}`
    }))}
/>;

export const Components = () => <TableBase
    columns={[
        {
            key: "name",
            text: "Name"
        },
        {
            key: "title",
            text: "Title"
        },
        {
            key: "status",
            text: "Status"
        },
        {
            key: "role",
            text: "Role"
        },
        {
            key: "actions",
            text: ""
        }
    ]}
    rows={[...new Array(10)].map(() => (
        {
            id: "1",
            name: (
                <AvatarHeader
                    white
                    avatar={"/images/avatar.png"}
                    title={"Cameron Williamson"}
                    subTitle={"jenny wilson"}
                />
            ),
            title: (
                <TitleSubtitleBase
                    title={"Product directives officer"}
                    subTitle={"Intranet"}
                />
            ),
            status: (
                <Status active>Active</Status>
            ),
            role: (
                <TextInfo message={"Admin"}/>
            ),
            actions: (
                <Button>Edit</Button>
            )
        }
    ))}
/>;
export const Stripe = () => <TableBase
    stripe
    columns={[
        {
            key: "name",
            text: "Name"
        },
        {
            key: "title",
            text: "Title"
        },
        {
            key: "status",
            text: "Status"
        },
        {
            key: "role",
            text: "Role"
        },
        {
            key: "actions",
            text: ""
        }
    ]}
    rows={[...new Array(10)].map(() => (
        {
            id: "1",
            name: (
                <AvatarHeader
                    white
                    avatar={"/images/avatar.png"}
                    title={"Cameron Williamson"}
                    subTitle={"jenny wilson"}
                />
            ),
            title: (
                <TitleSubtitleBase
                    title={"Product directives officer"}
                    subTitle={"Intranet"}
                />
            ),
            status: (
                <Status active>Active</Status>
            ),
            role: (
                <TextInfo message={"Admin"}/>
            ),
            actions: (
                <Button>Edit</Button>
            )
        }
    ))}
/>;
export const Dark = () => <Container style={{marginTop: 40}}>
    <TableBase
        dark
        columns={[
            {
                key: "name",
                text: "Name"
            },
            {
                key: "title",
                text: "Title"
            },
            {
                key: "status",
                text: "Status"
            },
            {
                key: "role",
                text: "Role"
            },
            {
                key: "actions",
                text: ""
            }
        ]}
        rows={[...new Array(10)].map(() => (
            {
                id: "1",
                name: (
                    <AvatarHeader
                        avatar={"/images/avatar.png"}
                        title={"Cameron Williamson"}
                        subTitle={"jenny wilson"}
                    />
                ),
                title: (
                    <TitleSubtitleBase
                        title={"Product directives officer"}
                        subTitle={"Intranet"}
                    />
                ),
                status: (
                    <Status active>Active</Status>
                ),
                role: (
                    <TextInfo message={"Admin"}/>
                ),
                actions: (
                    <Button>Edit</Button>
                )
            }
        ))}
    />
</Container>;
export const Hover = () => <Container style={{marginTop: 40}}>
    <TableBase
        dark
        hover
        columns={[
            {
                key: "name",
                text: "Name"
            },
            {
                key: "title",
                text: "Title"
            },
            {
                key: "status",
                text: "Status"
            },
            {
                key: "role",
                text: "Role"
            },
            {
                key: "actions",
                text: ""
            }
        ]}
        rows={[...new Array(10)].map(() => (
            {
                id: "1",
                name: (
                    <AvatarHeader
                        avatar={"/images/avatar.png"}
                        title={"Cameron Williamson"}
                        subTitle={"jenny wilson"}
                    />
                ),
                title: (
                    <TitleSubtitleBase
                        title={"Product directives officer"}
                        subTitle={"Intranet"}
                    />
                ),
                status: (
                    <Status active>Active</Status>
                ),
                role: (
                    <TextInfo message={"Admin"}/>
                ),
                actions: (
                    <Button>Edit</Button>
                )
            }
        ))}
    />
</Container>;