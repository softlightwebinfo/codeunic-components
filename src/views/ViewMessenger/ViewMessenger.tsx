// Generated with util/create-component.js
import React, { useCallback, useMemo, useState } from "react";
import { ViewMessengerProps } from "./ViewMessenger.types";
import { BEM } from "../../libs/BEM";
import AppBox from "../../components/AppBox/AppBox";
import Aside from "../../components/Aside/Aside";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faEnvelope, faList, faTh, faUser } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar/Navbar";
import AvatarHeader from "../../components/AvatarHeader/AvatarHeader";
import { useInput } from "../../hooks/useInput";
import Tabs from "../../components/Tabs/Tabs";
import { ChatContact } from "../../components";
import Scroll from "../../components/Scroll/Scroll";
import NoResultFound from "../../components/NoResultFound/NoResultFound";
import Message from "../../components/Message/Message";
import ChatSendMsg from "../../components/ChatSendMsg/ChatSendMsg";
import TextInfo from "../../components/TextInfo/TextInfo";
import { ChatContactProps } from "../../components/ChatContact/ChatContact.types";

const ViewMessenger: React.FC<ViewMessengerProps> = (props) => {
    const [value, onChange] = useInput();
    const [send, onSend] = useInput();
    const [active, setActive] = useState<ChatContactProps>();
    const bm = new BEM("ViewMessenger", {});
    bm.Append(props.className);

    const chats = useMemo(() => {
        if (value) {
            return props.chats.filter(item => item.title.trim().toLowerCase()
                .indexOf(value.trim().toLowerCase()) !== -1)
        }
        return props.chats ?? [];
    }, [props.chats, value]);

    const contacts = useMemo(() => {
        if (value) {
            return props.contacts.filter(item => item.title.trim().toLowerCase()
                .indexOf(value.trim().toLowerCase()) !== -1)
        }
        return props.contacts ?? [];
    }, [props.contacts, value]);

    const onSendMessage = useCallback(() => {
        props.onSendMessage?.(send, active);
    }, []);

    return (
        <div data-testid="ViewMessenger" className={bm.toString()} style={props.style}>
            <AppBox>
                <div className={bm.Children("main")}>
                    <Aside>
                        <div className={bm.Children("aside-top")}>
                            <AvatarHeader white{...props.user}/>
                            <Input
                                value={value}
                                onChange={onChange}
                                border
                                default
                                search
                                placeholder={"Search contacto"}
                            />
                        </div>
                        <Tabs
                            active={0}
                            tabs={[
                                {title: "CHAT", icon: <FontAwesomeIcon icon={faEnvelope}/>},
                                {title: "CONTACT", icon: <FontAwesomeIcon icon={faUser}/>},
                            ]}
                        >
                            <Scroll>
                                {!chats.length ? (<NoResultFound/>) : chats.map((item) => (
                                    <ChatContact
                                        {...item}
                                        key={item.id}
                                        active={active?.id === item.id}
                                        onClick={() => setActive(item)}
                                    />
                                ))}
                            </Scroll>
                            <Scroll>
                                {!contacts.length ? (<NoResultFound/>) : contacts.map((item) => (
                                    <ChatContact
                                        {...item}
                                        key={item.id}
                                        active={active?.id === item.id}
                                        onClick={() => setActive(item)}
                                    />
                                ))}
                            </Scroll>
                        </Tabs>
                    </Aside>
                    <section className={bm.Children("content")}>
                        {active ? (
                            <>
                                <Navbar
                                    borderBottom
                                    fixed={false}
                                    default
                                    white
                                    left={(
                                        <AvatarHeader
                                            white
                                            avatar={active.avatar}
                                            title={active.title}
                                        />
                                    )}
                                />
                                <Scroll className={bm.Children("messages")}>
                                    {props.messages.map((item) => (
                                        <Message
                                            key={item.id}
                                            isFrom={props.userFrom == item.fromId}
                                            {...item}
                                        />
                                    ))}
                                </Scroll>
                                <ChatSendMsg
                                    placeholder={"Type message..."}
                                    value={send}
                                    onChange={onSend}
                                    onClick={onSendMessage}
                                />
                            </>
                        ) : (
                            <div className={bm.Children("no-content")}>
                                <FontAwesomeIcon icon={faComments}/>
                                <TextInfo message={"Welcome to Chat App"}/>
                            </div>
                        )}
                    </section>
                </div>
            </AppBox>
        </div>
    );
}

export default ViewMessenger;