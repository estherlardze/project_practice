import { storyblokInit } from "@storyblok/react/rsc";
import Landing from "./Landing";
import { About } from "./About";


storyblokInit({
    components: {
        landing_page: Landing,
        about: About,
    },
});

export default function StoryblokProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
