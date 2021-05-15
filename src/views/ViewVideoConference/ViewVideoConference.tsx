// Generated with util/create-component.js
import React from "react";
import { ViewVideoConferenceProps } from "./ViewVideoConference.types";
import { BEM } from "../../libs/BEM";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../components/Logo/Logo";
import Menu from "../../components/Menu/Menu";
import { Grid } from "../../components";
import GridColumn from "../../components/GridColumn/GridColumn";
import Image from "../../components/Image/Image";
import TitleSubtitle from "../../components/TitleSubtitle/TitleSubtitle";
import Section from "../../components/Section/Section";
import ContainerFluid from "../../components/ContainerFluid/ContainerFluid";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import Input from "../../components/Input/Input";
import InputGroup from "../../components/InputGroup/InputGroup";
import Button from "../../components/Button/Button";

const ViewVideoConference: React.FC<ViewVideoConferenceProps> = (props) => {
    const bm = new BEM("ViewVideoConference", {});
    bm.Append(props.className)
    return (
        <div className={bm.toString()} style={props.style}>
            <Navbar
                default
                left={<Logo {...props.logo}/>}
                right={(
                    <Menu
                        horizontal
                        menu={props.menu}
                    />
                )}
            />
            <Section image={props.bgImage}>
                <ContainerFluid default>
                    <Grid col={2} style={{columnGap: 200}}>
                        <GridColumn className={bm.Children("col1")}>
                            <TitleSubtitle
                                title={props.title}
                                subTitle={props.description}
                            />
                            <div className={bm.Children("group")}>
                                <ButtonDefault onClick={props.form.onClick}><FontAwesomeIcon icon={faVideo}/> New Meeting</ButtonDefault>
                                <InputGroup
                                    icon={<FontAwesomeIcon icon={faVideo}/>}
                                >
                                    <Input
                                        placeholder={"Enter a code or link"}
                                        onChange={props.form.onChange}
                                        value={props.form.value}
                                    />
                                </InputGroup>
                                <Button onClick={props.form.onClickJoin}>Join</Button>
                            </div>
                        </GridColumn>
                        <GridColumn>
                            <Image className={bm.Children("image")} src={props.image}/>
                        </GridColumn>
                    </Grid>
                </ContainerFluid>
            </Section>
        </div>
    );
}

export default ViewVideoConference;