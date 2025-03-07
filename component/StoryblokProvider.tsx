import { storyblokInit } from "@storyblok/react/rsc";
import Landing from "./Landing";

storyblokInit({
    components: {
        landing_page: Landing,
    },
});

export default function StoryblokProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
