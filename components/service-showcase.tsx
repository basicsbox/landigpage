import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'

export function ServiceShowcase() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#00ff87] to-[#60efff]">Our Services in Detail</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover how our services can make your life easier
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-12">
          <Tabs defaultValue="print" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-[#00ff87]/10">
              <TabsTrigger 
                value="print"
                className="data-[state=active]:bg-[#00ff87] data-[state=active]:text-black"
              >
                Print Services
              </TabsTrigger>
              <TabsTrigger 
                value="food"
                className="data-[state=active]:bg-[#00ff87] data-[state=active]:text-black"
              >
                Food Ordering
              </TabsTrigger>
            </TabsList>
            <TabsContent value="print">
              <Card className="border-2 hover:border-[#00ff87] transition-colors">
                <CardContent className="p-6">
                  <div className="grid gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-[#00ff87]">Document Types Supported</h3>
                      <ul className="mt-2 grid gap-2">
                        <li>• Business Documents (Reports, Presentations)</li>
                        <li>• Academic Papers and Assignments</li>
                        <li>• Marketing Materials (Flyers, Brochures)</li>
                        <li>• Personal Documents</li>
                        <li>• Photos and Graphics</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#00ff87]">Pricing Structure</h3>
                      <ul className="mt-2 grid gap-2">
                        <li>• Transparent per-page pricing</li>
                        <li>• Volume discounts available</li>
                        <li>• Special rates for students</li>
                        <li>• Additional charges for premium paper types</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#00ff87]">Delivery Options</h3>
                      <ul className="mt-2 grid gap-2">
                        <li>• Express delivery (within 2 hours)</li>
                        <li>• Standard delivery (same day)</li>
                        <li>• Scheduled delivery</li>
                        <li>• Pick-up option available</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="food">
              <Card className="border-2 hover:border-[#00ff87] transition-colors">
                <CardContent className="p-6">
                  <div className="grid gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-[#00ff87]">Restaurant Partnerships</h3>
                      <ul className="mt-2 grid gap-2">
                        <li>• Wide variety of local restaurants</li>
                        <li>• Exclusive restaurant deals</li>
                        <li>• Quality-verified partners</li>
                        <li>• Direct communication with restaurants</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#00ff87]">Delivery Radius</h3>
                      <ul className="mt-2 grid gap-2">
                        <li>• Coverage across major city areas</li>
                        <li>• Real-time delivery radius updates</li>
                        <li>• Extended radius for special orders</li>
                        <li>• Multiple delivery zones support</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#00ff87]">Order Tracking Features</h3>
                      <ul className="mt-2 grid gap-2">
                        <li>• Real-time GPS tracking</li>
                        <li>• Estimated delivery time updates</li>
                        <li>• Order status notifications</li>
                        <li>• Direct chat with delivery partner</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
} 