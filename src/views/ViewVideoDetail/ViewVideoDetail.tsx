// Generated with util/create-component.js
import React, { Fragment } from "react";
import { ViewVideoDetailProps } from "./ViewVideoDetail.types";
import { BEM } from "../../libs/BEM";
import TitleActions from "../../components/TitleActions/TitleActions";
import { Carousel, Container, Grid, GridColumn, Section, VideoPlayer } from "../../components";
import TitleCategory from "../../components/TitleCategory/TitleCategory";
import LayoutCardVideo from "../../layouts/LayoutCardVideo/LayoutCardVideo";
import Badges from "../../components/Badges/Badges";
import CommentsList from "../../components/CommentsList/CommentsList";
import { WidgetSubscribe } from "../../widgets";
import CommentsForm from "../../components/CommentsForm/CommentsForm";

const ViewVideoDetail: React.FC<ViewVideoDetailProps> = (props) => {
    const bm = new BEM("ViewVideoDetail", {});
    bm.Append(props.className);
    return (
        <div className={bm.toString()} style={props.style}>
            <Section image={props.header.image}>
                <Container>
                    <Grid style={{gridTemplateColumns: "1fr 400px", columnGap: 100}}>
                        <GridColumn>
                            <TitleActions{...props.header}/>
                            <VideoPlayer{...props.player}/>
                        </GridColumn>
                        <GridColumn gridColumn={"span 2"}>
                            <TitleCategory style={{marginTop: 40}} title={"Genres"} hiddenRight/>
                            <Badges list={props.genres}/>
                            {props.seasons.map((season, index) => (
                                <Fragment key={index}>
                                    <TitleCategory style={{marginTop: 40}} title={season.title}/>
                                    <Carousel
                                        col={4}
                                        component={(props) => (
                                            <LayoutCardVideo
                                                {...props}
                                            />
                                        )}
                                        data={season.data}
                                    />
                                </Fragment>
                            ))}
                        </GridColumn>
                        <GridColumn gridColumn={"span 2"}>
                            <TitleCategory title={"Comments"} hiddenRight/>
                        </GridColumn>
                        <GridColumn>
                            <CommentsList comments={props.comments}/>
                            <CommentsForm
                                onChange={props.onChangeComment}
                                value={props.commentValue}
                                onSubmit={props.onSubmitComment}
                            />
                        </GridColumn>
                        <GridColumn>
                            <WidgetSubscribe
                                onChange={props.subscribe.onChange}
                                value={props.subscribe.value}
                                onSubmit={props.subscribe.onSubmit}
                            />
                        </GridColumn>
                    </Grid>
                </Container>
            </Section>
        </div>
    );
}

export default ViewVideoDetail;