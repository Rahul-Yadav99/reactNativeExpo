import { Stack } from "expo-router";
export default function SettingLayout() {
    return (
        <Stack>
            <Stack.Screen name='index' />
            <Stack.Screen name='profile' />
        </Stack>
    )
}