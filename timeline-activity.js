import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import {
    Box,
    Paper,
    Avatar,
    Typography,
    IconButton
} from '@mui/material';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import { Activity, Gallery } from 'react-activity-feed';
import TimeAgo from 'react-timeago'

export default function UserTimelineCard(props) {
    const { activity, feedGroup, userId } = props;
    // console.log(JSON.stringify(activity));

    function LikesText(props) {
        const { reaction_counts } = props;
        // console.log(JSON.stringify(reaction_counts));
        if (reaction_counts.hasOwnProperty('like')) {
            if (reaction_counts.like === 0) {
                return <Typography>0 likes</Typography>
            } else {
                return <Typography>{reaction_counts.like + ' likes'}</Typography>
            }
        } else {
            return <Typography>0 likes</Typography>
        }
    }

    function CommentsText(props) {
        const { reaction_counts } = props;
        // console.log(JSON.stringify(reaction_counts));
        if (reaction_counts.hasOwnProperty('comment')) {
            if (reaction_counts.comment === 0) {
                return <Typography sx={{ paddingLeft: 2 }}>0 comments</Typography>
            } else {
                return <Typography sx={{ paddingLeft: 2 }}>{reaction_counts.comment + ' comments'}</Typography>
            }
        } else {
            return <Typography sx={{ paddingLeft: 2 }}>0 comments</Typography>
        }
    }

    return (
        <Box component={Paper} elevation={1} sx={{ marginTop: 1 }} >
        <Activity
            activity={activity}
            feedGroup={feedGroup}
            userId={userId}
            Header={() => (
            <Box sx={{ backgroundColor: 'background.paper', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingX: 2, paddingTop: 2, paddingBottom: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Avatar
                    component={RouterLink}
                    to={"/user/" + activity.actor.id}
                    alt={activity.actor.data.first_name + ' ' + activity.actor.data.last_name}
                    src={activity.actor.data.profileImage} />
                <Box sx={{ flexDirection: 'column', alignContent: 'center', marginLeft: 2 }}>
                    <Typography variant="body2">{activity.actor.data.first_name + ' ' + activity.actor.data.last_name + ' shared a ' +activity.verb }</Typography>
                    <Typography variant="caption"><TimeAgo date={activity.time} /></Typography>
                </Box>
                </Box>
                <Box sx={{ flexDirection: 'column', alignContent: 'center' }} >
                <IconButton color="primary" aria-label="app images">
                    <MoreVertSharpIcon />
                </IconButton>
                </Box>
            </Box>
            )}
            Content={() => (
            <Box sx={{ backgroundColor: 'background.paper' }}>
                {activity.text ?
                    <Box sx={{ paddingX: 2, paddingY: 1 }} >
                        <Typography>{activity.text}</Typography>
                    </Box>
                : null}
                <Box sx={{ paddingY: 1, paddingX: 0, marginX: 0 }} >
                    <Gallery sx={{ borderRadius: 10 }} images={['https://picsum.photos/1000/1000']} />
                </Box>
                {activity.attachments ?
                    <Box sx={{ paddingY: 1 }} >
                        <Gallery images={activity.attachments.images} />
                    </Box>
                : null}
            </Box>
            )}
            Footer={() => (
            <Box sx={{ backgroundColor: 'background.paper', display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', paddingX: 2, paddingTop: 1, paddingBottom: 2 }}>
                    {/* <Typography>x likes</Typography> */}
                    <LikesText reaction_counts={activity.reaction_counts} />
                    <CommentsText reaction_counts={activity.reaction_counts} />
                </Box>
            </Box>
            )}
        />
        </Box>
    )
}