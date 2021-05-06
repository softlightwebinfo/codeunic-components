// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { TitleActionsProps } from "../../components/TitleActions/TitleActions.types";
import { SectionProps } from "../../components/Section/Section.types";
import { VideoPlayerProps } from "../../components/VideoPlayer/VideoPlayer.types";
import { CarouselProps } from "../../components/Carousel/Carousel.types";
import { CommentProps } from "../../components/Comment/Comment.types";
import { WidgetSubscribeProps } from "../../widgets/WidgetSubscribe/WidgetSubscribe.types";

export interface ViewVideoDetailProps extends IProps {
    header: TitleActionsProps & SectionProps;
    player: VideoPlayerProps;
    seasons: (CarouselProps & { title: string })[];
    genres: string[];
    comments: CommentProps[];
    subscribe: WidgetSubscribeProps;
    commentValue: string;

    onSubmitComment(evt: any);
    onChangeComment(evt: any);
}
