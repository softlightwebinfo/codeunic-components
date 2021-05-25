// Generated with util/create-component.js
import React from "react";
import { ViewContactProps } from "./ViewContact.types";
import { BEM } from "../../libs/BEM";
import AppBox from "../../components/AppBox/AppBox";
import Navbar from "../../components/Navbar/Navbar";
import Input from "../../components/Input/Input";
import { faClock, faList, faPlus, faStar, faTh, faTrash, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button/Button";
import Menu from "../../components/Menu/Menu";
import Aside from "../../components/Aside/Aside";
import TextInfo from "../../components/TextInfo/TextInfo";
import TableBase from "../../components/TableBase/TableBase";

const ViewContact: React.FC<ViewContactProps> = (props) => {
    const bm = new BEM("ViewContact", {});
    bm.Append(props.className)
    return (
        <div data-testid="ViewContact" className={bm.toString()} style={props.style}>
            <AppBox>
                <Navbar
                    borderBottom
                    fixed={false}
                    default
                    white
                    isToggle
                    title={"Contacts"}
                    left={(
                        <Input
                            default
                            search
                            placeholder={"Search contacto"}
                        />
                    )}
                    right={(
                        <>
                            <Button isIcon><FontAwesomeIcon icon={faList}/></Button>
                            <Button isIcon><FontAwesomeIcon icon={faTh}/></Button>
                        </>
                    )}
                />
                <section className={bm.Children("content")}>
                    <Aside>
                        <div className={bm.Children("aside-button")}>
                            <Button block theme={"primary"}>
                                <FontAwesomeIcon icon={faUserPlus}/>
                                Create new
                            </Button>
                        </div>
                        <Menu
                            className={bm.Children("menu")}
                            active={{contacts: true}}
                            default
                            menu={{
                                contacts: {
                                    label: "Contacts",
                                    icon: <FontAwesomeIcon icon={faUser}/>
                                },
                                starredContacts: {
                                    label: "Starred Contacts",
                                    icon: <FontAwesomeIcon icon={faStar}/>
                                },
                                frequentlyUsed: {
                                    label: "Frequently Used",
                                    icon: <FontAwesomeIcon icon={faClock}/>
                                },
                                trash: {
                                    label: "Trash",
                                    icon: <FontAwesomeIcon icon={faTrash}/>
                                },
                            }}
                        />
                        <TextInfo message={"LABELS"}/>
                        <Menu
                            className={bm.Children("menu")}
                            default
                            menu={{
                                banking: {
                                    label: "Banking",
                                    icon: <FontAwesomeIcon icon={faUser}/>
                                },
                                company: {
                                    label: "Company",
                                    icon: <FontAwesomeIcon icon={faStar}/>
                                },
                                payments: {
                                    label: "Payments",
                                    icon: <FontAwesomeIcon icon={faClock}/>
                                },
                                addLabel: {
                                    label: "Add Label",
                                    icon: <FontAwesomeIcon icon={faPlus}/>
                                },
                            }}
                        />
                    </Aside>
                    <section className={bm.Children("right")}>
                        <TableBase
                            rows={props.rows}
                            columns={props.columns}
                        />
                    </section>
                </section>
            </AppBox>
        </div>
    );
}

export default ViewContact;