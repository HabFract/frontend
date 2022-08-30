// #region Global Imports
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// #endregion Global Imports

// #region Local Imports
import { OnboardingTemplate as VisTemplate } from '@/templates/OnboardingStageTemplate'
// #endregion Local Imports

interface VisualisationsProps {}

const Visualisations: React.FC<VisualisationsProps> = () => {
  const params = useParams()
  return (
    <VisTemplate>
      <p>Visualisations</p>
    </VisTemplate>
  )
}

export default Visualisations
