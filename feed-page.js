import React, { useContext } from 'react';
import { StreamApp, FlatFeed } from 'react-activity-feed';
import UserTimelineNewPlaceholder from './timeline-placeholder';
import UserTimelineCard from './timeline-activity';
import { AuthContext } from './AuthContext';
import Container from '@mui/material/Container';

export default function DashboardPage() {
    const user = useContext(AuthContext);
  
    return (
      <Container maxWidth="lg" disableGutters sx={{ paddingY: 2 }}>
        <StreamApp apiKey="xxxxxxxx" appId="xxxxxxxx" token={user.stream_token}>
            <FlatFeed
                notify
                feedGroup="user_timeline"
                Placeholder={() => (
                    <UserTimelineNewPlaceholder />
                )}
                Activity={({ activity, feedGroup, userId }) => (
                    <UserTimelineCard activity={activity} feedGroup={feedGroup} userId={userId} />
                )}
                options={{ withRecentReactions: true }}
            />
        </StreamApp>
    </Container>
    )
};