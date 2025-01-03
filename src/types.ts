export interface Itodos {
    id: string,
    title: string,
    description: string,
    dueDate: string,
    isCompleted: boolean,
    priority: "High" | "Medium" | "Low",
}