import React from 'react';
import { motion } from 'framer-motion';
import { AlertOctagon, AlertTriangle, Info } from 'lucide-react';
interface Advisory {
  id: string;
  time: string;
  severity: 'critical' | 'warning' | 'info';
  title: string;
  description: string;
}
const advisories: Advisory[] = [
{
  id: '1',
  time: '10:42 AM',
  severity: 'critical',
  title: 'Severe Weather Warning - Northern Border',
  description:
  'Heavy snowfall expected at all North Dakota and Minnesota crossings. Expect delays of 2+ hours.'
},
{
  id: '2',
  time: '09:15 AM',
  severity: 'warning',
  title: 'System Maintenance Scheduled',
  description:
  'Electronic processing systems will undergo maintenance tonight from 02:00 to 04:00 EST.'
},
{
  id: '3',
  time: '08:30 AM',
  severity: 'info',
  title: 'New Lane Opened at San Ysidro',
  description:
  'Additional processing lane 4 is now open for general traffic to alleviate congestion.'
},
{
  id: '4',
  time: 'Yesterday',
  severity: 'info',
  title: 'Updated ID Requirements',
  description:
  'Reminder: Enhanced driver licenses are now accepted at all land ports of entry.'
}];

export function Advisories() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Header */}
        <div className="md:w-1/3">
          <h2 className="text-3xl font-bold text-white mb-4">
            Latest Advisories
          </h2>
          <p className="text-[#8b949e] mb-6">
            Stay informed with real-time alerts affecting border operations and
            travel conditions.
          </p>
          <div className="p-4 rounded-lg bg-[#00e5c7]/5 border border-[#00e5c7]/20">
            <div className="flex items-center space-x-2 text-[#00e5c7] mb-2">
              <Info className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Status Overview
              </span>
            </div>
            <p className="text-sm text-[#8b949e]">
              Operations are normal at 85% of crossings. Weather impacts limited
              to northern regions.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="md:w-2/3 relative pl-4 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00e5c7]/50 to-transparent" />

          <div className="space-y-8">
            {advisories.map((item, index) =>
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                x: 20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.1
              }}
              className="relative pl-12 md:pl-16">

                {/* Timeline Dot */}
                <div
                className={`absolute left-[13px] md:left-[29px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#0d1117] z-10 ${item.severity === 'critical' ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]' : item.severity === 'warning' ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]' : 'bg-[#00e5c7] shadow-[0_0_8px_rgba(0,229,199,0.6)]'}`} />


                <div
                className="glass-panel p-5 rounded-lg border-l-2"
                style={{
                  borderLeftColor:
                  item.severity === 'critical' ?
                  '#ef4444' :
                  item.severity === 'warning' ?
                  '#f59e0b' :
                  '#00e5c7'
                }}>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                    <div className="flex items-center space-x-2">
                      {item.severity === 'critical' &&
                    <AlertOctagon className="w-4 h-4 text-red-500" />
                    }
                      {item.severity === 'warning' &&
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    }
                      {item.severity === 'info' &&
                    <Info className="w-4 h-4 text-[#00e5c7]" />
                    }
                      <span
                      className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${item.severity === 'critical' ? 'bg-red-500/10 text-red-500' : item.severity === 'warning' ? 'bg-amber-500/10 text-amber-500' : 'bg-[#00e5c7]/10 text-[#00e5c7]'}`}>

                        {item.severity}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#8b949e]">
                      {item.time}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#8b949e]">{item.description}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}