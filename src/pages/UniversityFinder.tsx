<TabsContent value="programs">
  <div className="bg-white rounded-lg shadow-sm p-5 mb-8">
    <div className="flex justify-between mb-6">
      <h2 className="font-syne font-semibold text-xl">Available Programs</h2>
      <Button variant="outline" className="flex items-center gap-1" onClick={() => window.open("https://studyinhungary.hu/study-in-hungary/menu/find-a-study-programme/study-finder.html", "_blank")}>
        Visit Official Site <ExternalLink className="h-4 w-4" />
      </Button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {programs.map((program, index) => (
        <Card key={index} className={`cursor-pointer transition-all ${selectedProgram === program ? 'ring-2 ring-primary' : ''}`} onClick={() => setSelectedProgram(program)}>
          <CardHeader>
            <CardTitle className="text-lg">{program}</CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  </div>
</TabsContent>