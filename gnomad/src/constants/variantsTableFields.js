export default {
  constantFields: [
    // 'xpos',
    // 'xstart',
    // 'xstop',
    'chrom',
    'CANONICAL',
    'HGVS',
    'HGVSc',
    'HGVSp',
    'alt',
    'category',
    'flags',
    'indel',
    // 'genes',
    'major_consequence',
    'pos',
    'ref',
    'rsid',
    // 'orig_alt_alleles',
    // 'transcripts',
    // 'vep_annotations',
    'variant_id',
    'par_region',
  ],
  sumFields: [
    'ac_female',
    'ac_male',
    'allele_count',
    // 'allele_freq',
    'allele_num',
    'an_female',
    'an_male',
    'hom_count',
    'hemi_count',
  ],
  nestedSumFields: [
    'pop_acs',
    'pop_ans',
    'pop_homs',
  ],
  uniqueFields: [
    'ac_female',
    'ac_male',
    'hemi_count',
    'allele_count',
    'allele_freq',
    'allele_num',
    'an_female',
    'an_male',
    'pop_acs',
    'pop_ans',
    'pop_homs',
    'pop_hemis',
    'filter',
    // 'site_quality',
    // 'genotype_depths',
    // 'genotype_qualities',
    'quality_metrics',
  ],
}


