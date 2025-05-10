import { Code, Database, Wrench } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SkillCardProps {
  title: string
  skills: string[]
  icon: "Code" | "Database" | "Wrench"
}

export function SkillCard({ title, skills, icon }: SkillCardProps) {
  const IconComponent = () => {
    switch (icon) {
      case "Code":
        return <Code className="h-6 w-6 text-slate-700" />
      case "Database":
        return <Database className="h-6 w-6 text-slate-700" />
      case "Wrench":
        return <Wrench className="h-6 w-6 text-slate-700" />
      default:
        return <Code className="h-6 w-6 text-slate-700" />
    }
  }

  return (
    <Card className="border-none shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
            <IconComponent />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-2 gap-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-slate-800 rounded-full mr-2"></span>
              <span className="text-slate-700">{skill}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
