import { Progress } from "@/components/shadcn-ui/progress"

export function LoaderProgress({ progress }) {
    return (
        <div className="w-full max-w-md mx-auto space-y-4  ">
            <h2 className="text-2xl font-bold text-center">Loading... {progress}%</h2>
            <Progress value={progress} className="w-full" />
        </div>
    )
}

